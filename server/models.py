from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from config import db


class Request( db.Model ):
    __tablename__ = 'requests'



    id = db.Column( db.Integer, primary_key=True )
    name = db.Column( db.String )
    email = db.Column( db.String )
    message = db.Column( db.Text(200) )
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
