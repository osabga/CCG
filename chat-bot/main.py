from contextlib import asynccontextmanager
from fastapi import FastAPI
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as book_router
from typing import Annotated

config = dotenv_values(".env")


@asynccontextmanager
async def lifespan(FastAPI):
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    print("Connected to the MongoDB database!")
    yield
    app.mongodb_client.close()
    print("Close")


app = FastAPI(lifespan=lifespan)


@app.get("/")
async def root():
    return {"message": "Welcome"}


app.include_router(book_router, tags=["books"], prefix="/book")

if __name__ == '__main__':
    import uvicorn

    uvicorn.run('main:app', port=8082)
