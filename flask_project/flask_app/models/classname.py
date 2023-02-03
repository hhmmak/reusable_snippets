from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class ClassName:

    db_name = 'schema_name'

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        

    #.. get methods

    @classmethod
    def get_all_classname(cls):
        query = "SELECT * FROM classname;"
        results = connectToMySQL(cls.db_name).query_db(query)
        classname = []
        for row in results:
            classname.append(cls(row))
        return classname
    
    @classmethod
    def get_one_classname(cls, data):
        query = "SELECT * FROM classname WHERE id = %(id_num)s;"
        results = connectToMySQL(cls.db_name).query_db(query, data)
        return cls(results[0])

    #.. add methods
    @classmethod
    def add_one_classname(cls, data):
        query = "INSERT INTO classname (name, description, created_at, updated_at) VALUES (%(name)s, %(description)s, %(user_id)s,  NOW(), NOW());"
        return connectToMySQL(cls.db_name).query_db(query, data)

    #.. update methods
    @classmethod
    def change_one_classname(cls, data):
        query = "UPDATE classname SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_made = %(date_made)s, under_thirty_mins = %(under_thirty_mins)s, updated_at = NOW() WHERE id = %(id_num)s;"
        connectToMySQL(cls.db_name).query_db(query, data)
        return cls

    #.. delete methods
    @classmethod
    def delete_one_classname(cls, data):
        query = "DELETE FROM classname WHERE id = %(id_num)s;"
        connectToMySQL(cls.db_name).query_db(query, data)
        return cls


    #.. validation methods

    @staticmethod
    def validate_create_classname(data):
        is_valid = True
        # name
        if len(data['name']) < 2:
            is_valid = False
            flash("Name should be 3 characters or more")
        elif not data['name'].isalpha():
            is_valid = False
            flash("Name must contain only uppercase or lowercase letters.")
        return is_valid