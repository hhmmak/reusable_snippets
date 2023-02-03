# create module/package for using flask_app

from flask import Flask
app = Flask(__name__)
app.secret_key = "doyouknowthat"    #! change secret_key accordingly