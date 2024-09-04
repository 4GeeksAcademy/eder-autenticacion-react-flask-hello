from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120),unique=True,nullable=False)
    name = db.Column(db.String(120),unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(240), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.username},{self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username":self.username,
            "name":self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    

    