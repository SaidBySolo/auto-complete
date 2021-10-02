from sanic import Sanic
from sanic.request import Request
import json

from sanic.response import json as json_response
import asyncio

app = Sanic(__name__)

def load_file():
    with open("scripts/result-korean-character.json", "r", encoding="utf-8") as f:
        data: dict[str, str] = json.load(f)
    return data

def auto_complete(word: str):
    data = load_file()
    return [key for key in data.keys() if word in key]

@app.get('/search')
async def search(request: Request): 
    data = request.args.get('q') # type: ignore
    result = await asyncio.to_thread(auto_complete, data)
    return json_response({"result": result[0:5]}, headers={"Access-Control-Allow-Origin": "*"})

@app.get('/data')
async def data(request: Request):
    result = await asyncio.to_thread(load_file)
    return json_response({"result": list(result.keys())}, headers={"Access-Control-Allow-Origin": "*"})

app.run(host="0.0.0.0")