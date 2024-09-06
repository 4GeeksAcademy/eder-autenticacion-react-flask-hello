"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token,jwt_required, get_jwt_identity




api = Blueprint('api', __name__)

bcrypt = Bcrypt()
jwt = JWTManager()


# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



""" REGISTER USER """

@api.route('/create', methods=['POST'])
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

        hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        new_user = User(username = data['username'], name = data['name'], email = data['email'], password = hashed_password)
        db.session.add(new_user)   
        db.session.commit()
        return jsonify({"msg":"User registered successfully"}),200
                
    except Exception as err:
        return jsonify({"error":"There was an unexpected error","msg":str(err)}),500

@api.route('/login', methods=['POST'])
def login():
    user = request.json.get("username", None)
    passw = request.json.get("password", None)
    print(f"User: {user}, Password: {passw}")
    

    if user is None or passw is None:
            return jsonify({"msg":"Username and password are required"}),400
    
    try:        
        
        query_user = db.session.query(User).filter_by(username=user).one()
        user_db_passw = query_user.password

        validate = bcrypt.check_password_hash(user_db_passw,passw)
        
        if validate:
            user_id = query_user.id
            access_token = create_access_token(identity = user_id)
            return jsonify({"access_token":access_token,"username":query_user.username})      
        else: 
            return jsonify({"error":"Incorrect password"}),400

    except Exception as err:
        print(f"Error: {err}")  # Para depuración
        return jsonify({"error":"there was an unexpected error","msg":str(err)}),500
    
  
@api.route('/validate',methods=['GET'])
@jwt_required()
def validate_access():
    try:
        current_id = get_jwt_identity()
        if current_id:
            return jsonify({"validate":True})
        else:
            return jsonify({"validate":False})
    except Exception as err:
        return jsonify({"error":"There was an unexpected error","msg":str(err)})














    
