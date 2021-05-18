from flask import Flask, render_template, request, session, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from mysql_acces import *
import logging

logging.basicConfig(filename='flasklog.log', level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = "hello"
app.config['SQLALCHEMY_DATABASE_URI'] = mysql_key
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class users(db.Model):
    email = db.Column("email", db.String(100), primary_key=True)
    password = db.Column("password", db.String(100))


    def __init__(self, password, email):
        self.password = password
        self.email = email

@app.route("/", methods=["POST","GET"])
def login():
    if request.method == "POST":
        user = request.form["email"]
        password = request.form["password"]
        session["user"] = user

        found_user = users.query.filter_by(email=user, password=password).first()
        if found_user:
            session["email"] = found_user.email
            return redirect(url_for("index.html"))
        else:
            flash("Wrong user or password")
            return render_template("login.html")
    else:
        if "user" in session:
            return redirect(url_for("index.html"))
        else:
            return render_template("login.html")

@app.route("/signup", methods=["POST","GET"])
def signup():
    if "user" in session:
        return redirect(url_for("index.html"))
    else:
        return render_template("signup.html")

@app.route("/index")
def index():
    try:
        user = session["user"]
        return render_template('index.html', user=user)
    except KeyError:
        return redirect(url_for("login.html"))

@app.route("/widgets")
def widgets():
    try:
        user = session["user"]
        return render_template('widgets.html', user=user)
    except KeyError:
        return redirect(url_for("login.html"))

@app.route("/table-data")
def table_data():
    try:
        user = session["user"]
        return render_template('table-data.html', user=user)
    except KeyError:
        return redirect(url_for("login.html"))

@app.route("/logout")
def logout():
    if "user" in session:
        flash("You have been logged out!", "info")
    session.pop("user", None)
    return redirect(url_for("login.html"))


if __name__ == "__main__":
    #db.create_all()
    app.run(debug=True)