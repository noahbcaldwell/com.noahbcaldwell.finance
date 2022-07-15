from flask import Flask
import requests as req
import json

app = Flask(__name__)

# Members API Route
@app.route("/members")
def getPrice():
    response = req.get("https://api.binance.com/api/v3/avgPrice?symbol=LINKUSDT")
    data = response.text
    parse_json = json.loads(data)
    price = str(round(float(parse_json['price']), 4))
    return price
    
if __name__ == "__main__":
    app.run(debug=True)