import json
import time


t = time.perf_counter()
with open("./result-korean-character.json", "r", encoding="utf-8") as f:
    data: dict[str, str] = json.load(f)


def auto_complete(word: str) -> list[str]:
    return [key for key in data.keys() if word in key]

print(auto_complete("chino"))
print(time.perf_counter() - t)