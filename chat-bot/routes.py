from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models import Book, BookUpdate, Prueba

router = APIRouter()


@router.post("/", response_description="Create a new book", status_code=status.HTTP_201_CREATED, response_model=Prueba)
def create_book(request: Request, user: Prueba = Body(...)):
    book = jsonable_encoder(user)

    new_book = request.app.database["test"].insert_one(book)
    created_book = request.app.database["test"].find_one(
        {"_id": new_book.inserted_id}
    )

    return created_book


@router.get("/", response_description="List all books", response_model=List[Book])
def list_books(request: Request):
    books = list(request.app.database["books"].find(limit=100))
    return books


@router.get("/{id}", response_description="Get a single book by id", response_model=Book)
def find_book(id: str, request: Request):
    if (book := request.app.database["books"].find_one({"_id": id})) is not None:
        return book
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Book with ID {id} not found")

