from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models import classname


#.. Visible Route

@app.route('/classnames/create')
def classname_new():
    # if "id" not in session:   # avoid access of user-sensitive routes without proper login
    #     print(f"--------- no session['id']")
    #     return redirect('/')

    return render_template('add_classname.html')

@app.route('/classnames/<int:id_num>')
def classname_detail(id_num):
    # if "id" not in session:   # avoid access of user-sensitive routes without proper login
    #     print(f"--------- no session['id']")
    #     return redirect('/')
    
    data = {
        "id_num": id_num
    }
    result = classname.Classname.get_one_classname(data)
    result.description = result.description.split('\n')   # split up lines in description
    return render_template('classnames.html', classname = result)

@app.route('/classnames/edit/<int:id_num>')
def classname_edit(id_num):
    # if "id" not in session:   # avoid access of user-sensitive routes without proper login
    #     print(f"--------- no session['id']")
    #     return redirect('/')
    
    data = {
        "id_num": id_num
    }
    result = classname.Classname.get_one_classname(data)
    return render_template('edit_classname.html', classname = result)


#.. Invisible Route

@app.route('/classnames/new', methods=['POST'])
def classname_create():
    data = {
        "name": request.form['name'],
        "description": request.form['description'],
        # "user_id": session['id'] #id in session = user being logged in = users.id = foreign key of classnames.user_id
    }
    classname.Classname.add_one_classname(data)
    return redirect('/dashboard')

@app.route('/classnames/update', methods=['POST'])
def classname_update():
    data = {
        "id_num": request.form['id_num'],
        "name": request.form['name'],
        "description": request.form['description'],
    }
    classname.Classname.change_one_classname(data)
    return redirect('/dashboard')

@app.route('/classnames/delete', methods=['POST'])
def classname_delete():
    data = {
        "id_num": request.form['id_num']
    }
    classname.Classname.delete_one_classname(data)
    return redirect('/dashboard')