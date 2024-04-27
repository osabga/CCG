from fastapi import APIRouter, Body, Request, Response, HTTPException, status, Depends, File, UploadFile
from fastapi.encoders import jsonable_encoder
from pymongo import MongoClient
from typing import List
from models import User, Question
from bson import ObjectId
from own_gpt import model_response
import os
import shutil

router = APIRouter()


def get_database(request: Request):
    """
    Method to get the database connection
    :param request: Request object
    :return: Connection to the database
    """
    return request.app.database


@router.post("/", response_description="Chatbot question", status_code=status.HTTP_201_CREATED)
async def create_question(question: Question = Body(...), db: MongoClient = Depends(get_database)):
    """
    Method to create a new question and associate it with a user
    :param question: Question to be created
    :param db: Database connection
    :return: User with the new question associated
    """
    try:
        # Insert the question into the database, collection "questions"
        db["questions"].insert_one(jsonable_encoder(question))

        return jsonable_encoder(question)

    except Exception as e:
        return HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@router.get("/{user_id}", response_description="Chatbot responses")
async def get_responses(user_id: str, db: MongoClient = Depends(get_database)):
    try:
        # Find the most recent question from the user
        user_question = db["questions"].find_one(
            {"userId": user_id},
            sort=[("date", -1)]
        )

        # Find the question ID
        user_question_id = user_question["_id"]

        # Obtain the response from the model
        chat_response = model_response(user_question["question"])

        # Create a query to find the question by its ID
        query = {"_id": user_question_id}
        # Create a new value to push the new answer to the question
        new_values = {"$set": {"answer": chat_response}}
        # Update the question with the new answer
        db["questions"].update_one(query, new_values)

        return {"response": chat_response, "question": user_question["question"]}
    except Exception as e:
        return HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@router.get("/questions/{user_id}", response_description="Chatbot questions")
async def get_user_questions(user_id: str, db: MongoClient = Depends(get_database)):
    """
    Method to get all the questions from a user
    :param user_id: ID of the user
    :param db: Database connection
    :return: List of questions from the user
    """
    try:
        # Find all the questions from the user
        user_questions = db["questions"].find({"userId": user_id})

        response = []
        for question in user_questions:
            question['_id'] = str(question['_id'])  # Convert ObjectId to string
            response.append(question)

        return jsonable_encoder(response)
    except Exception as e:
        return HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@router.post("/upload/")
async def upload_file(file: UploadFile):
    """
    Method to upload a file to the server
    :param file: Document to be uploaded
    :return: A message with the filename
    """
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400,
                            detail="File must be a PDF file")

    # Open the file in the data folder with the same name as the file
    with open(os.path.join("data", file.filename), "wb") as buffer:
        # Shutil is used to copy the file from the request to the buffer
        shutil.copyfileobj(file.file, buffer)
    return {"filename": file.filename}


@router.delete("/delete/{filename}")
async def delete_file(filename: str):
    """
    Method to delete a file from the server
    :param filename: Name of the file to be deleted
    :return: Message with the file deleted
    """
    try:
        os.remove(f"data/{filename}.pdf")
        return {"message": f"File {filename} deleted"}
    except Exception as e:
        return HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
