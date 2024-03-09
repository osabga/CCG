from fastapi import APIRouter, Body, Request, Response, HTTPException, status, Depends
from fastapi.encoders import jsonable_encoder
from pymongo import MongoClient
from typing import List
from models import User, Question
from bson import ObjectId
from own_gpt import model_response

router = APIRouter()


def response(question):
    pass


def get_database(request: Request):
    """
    Method to get the database connection
    :param request: Request object
    :return: Connection to the database
    """
    return request.app.database


@router.post("/", response_description="Chatbot question", status_code=status.HTTP_201_CREATED)
async def create_question(question: Question = Body(...), db: MongoClient = Depends(get_database)) -> User:
    """
    Method to create a new question and associate it with a user
    :param question: Question to be created
    :param db: Database connection
    :return: User with the new question associated
    """
    try:
        # Convert the question to a dictionary excluding the userId field
        request_question = jsonable_encoder(question, exclude={"userId"})

        # Insert the question into the database, collection "questions"
        new_question = db["questions"].insert_one(request_question)

        # Create a query to find the user by its ID
        query = {"_id": question.userId}
        # Create a new value to push the new question ID into the user's questionsId list
        new_values = {"$push": {"preguntasId": new_question.inserted_id}}

        # Update the user with the new question ID
        db["neoris"].update_one(query, new_values)

        # Return the user with the new question ID
        created_question = db["neoris"].find_one(
            {'_id': question.userId}
        )

        return created_question
    except Exception as e:
        return HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@router.get("/{user_id}", response_description="Chatbot responses")
async def get_responses(user_id: str, db: MongoClient = Depends(get_database)):
    try:
        user_data = db["neoris"].find_one(
            {"_id": user_id})
        user_question_id = user_data["preguntasId"][-1]

        user_question = db["questions"].find_one(
            {"_id": user_question_id}
        )

        chat_response = model_response(user_question["question"])

        # Create a query to find the user by its ID
        query = {"_id": user_question_id}
        # Create a new value to push the new question ID into the user's questionsId list
        new_values = {"$set": {"answer": chat_response}}

        db["questions"].update_one(query, new_values)

        return {"response": chat_response, "question": user_question["question"]}
    except Exception as e:
        return HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))






"""
@router.get("/", response_description="List all books", response_model=List[Book])
def list_books(request: Request):
    books = list(request.app.database["books"].find(limit=100))
    return books


@router.get("/{id}", response_description="Get a single book by id", response_model=Book)
def find_book(id: str, request: Request):
    if (book := request.app.database["books"].find_one({"_id": id})) is not None:
        return book
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Book with ID {id} not found")
"""
