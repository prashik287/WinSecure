from typing import Union
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read():
    return {"Hello ": "World "}
