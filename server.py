import flask
import os
import json
from flask import Flask, redirect, request,render_template, jsonify

app = Flask(__name__)

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
directory = {'Facts are stupid things.':'Ronald Reagan','We had no domestic attacks under Bush; we have had one under Obama.':'Rudy Giuliani','They misunderestimated me':'President George W. Bush','A zebra does not change its spots.':'Al Gore','I think that gay marriage should be between a man and a woman.':'California Gov. Arnold Schwarzenegger','I would have made a good Pope':'President Richard Nixon','Obamna':'President Donald J. Trump','Wow, a cow made of butter. My girls would love it. In fact, the first sentence Caroline ever said was "I like butter"':'Ted Cruz'}


app = flask.Flask(__name__)

@app.route("/")
def hello():
    return "Hello world"

if __name__ == "__main__":
    app.run()

@app.route("/Directory", methods=['GET'])
def returnDir():
    if request.method == 'GET':
        print("getting directory.")
        return json.dumps(directory);