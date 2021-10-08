import os

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session

app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact.html")
def contact():
    return render_template("contact.html")

@app.route("/about.html")
def about():
    return render_template("about.html")

@app.route("/map.html")
def MAP():
    return render_template("map.html")

