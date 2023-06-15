from flask import request, make_response
from flask_restful import Resource 
from sqlalchemy.exc import IntegrityError
from config import app, db, api
from models import Request



class Home(Resource):
    def get(self):
        return 'HomePage'


class Requests(Resource):
    def get(self):
        return make_response([r.to_dict() for r in Request.query.all()], 200)
    
    def post(self):
        data = request.get_json()
        new_request = Request(
            name = data['name'],
            email = data['email'],
            message = data['message']
        )
        db.session.add( new_request )
        db.session.commit()
        return {'message': '201, a new request has been added!'}, 201
    
class RequestsByID(Resource):
    def get(self, id):
        if id not in [r.id for r in Request.query.all()]:
            return {'error': '404, Request not found!'}, 404
        
        return make_response((Request.query.filter(Request.id==id).first()).to_dict(), 200)
    


api.add_resource(Home, '/')
api.add_resource(Requests, '/requests')
api.add_resource(RequestsByID, '/requests/<int:id>')




if __name__ == '__main__':
    app.run(port=5555, debug=True)    