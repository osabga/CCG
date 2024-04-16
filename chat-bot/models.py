import uuid
from typing import Optional
from pydantic import BaseModel, Field
from typing import List


class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    name: str = Field(...)
    email: str = Field(...)
    country: str = Field(...)
    state: str = Field(...)
    preguntasId: List[str] = Field([], description="Lista de IDs de preguntas asociadas al usuario")

    class Config:
        json_schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "name": "Juan",
                "email": "juan@gmail.com",
                "country": "Mexico",
                "state": "CDMX",
                "preguntasId": ["066de609-b04a-4b30-b46c-32537c7f1f6e",
                                "066de609-b04a-4b30-b46c-32537c7f1f6e"]
            }
        }


class Question(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    question: str = Field(...)
    answer: str = Field(...)
    userId: str = Field(...)

    class Config:
        json_schema_extra = {
            "example": {
                "question": "What is NEORIS?",
                "answer": "",
                "userId": "82d00a97-d923-4c5a-bc8e-e1684eff66a9"
            }
        }

