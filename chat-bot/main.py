from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as chat_router

config = dotenv_values(".env")


@asynccontextmanager
async def lifespan(FastAPI):
    try:
        app.mongodb_client = MongoClient(config["ATLAS_URI"])
        app.database = app.mongodb_client[config["DB_NAME"]]
        print("Connected to the MongoDB database!")
        yield
    finally:
        app.mongodb_client.close()
        print("Close")


app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Welcome"}


app.include_router(chat_router, tags=["pruebas"], prefix="/api/v1")

if __name__ == '__main__':
    import uvicorn

    uvicorn.run('main:app', host='0.0.0.0', port=8082, reload=True)
