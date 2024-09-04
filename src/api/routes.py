"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt




api = Blueprint('api', __name__)

bcrypt = Bcrypt()


# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



""" REGISTER USER """

@api.route('/register', methods=['POST'])
def create_user():
    data = request.get_json()
    required = {"username","name","email","password"}
    query_user = db.session.query(User).filter_by(username = data['username'], email = data['email']).first()

    try:
        for item in required:
            if item not in data or not data[item]:
                return jsonify({"msg":"Username, name, email and password are required."}),400
            
        if query_user is not None:
            return jsonify({"msg":"This username or email is already registered"}),400

        hashed_password = bcrypt.generate_password_hash(data['password'])
        new_user = User(username = data['username'], name = data['name'], email = data['email'], password = hashed_password)
        db.session.add(new_user)   
        db.session.commit()
        return jsonify({"msg":"User registered successfully"}),200
                
    except Exception as err:
        return jsonify({"error":"There was an unexpected error","msg":str(err)}),500







    
