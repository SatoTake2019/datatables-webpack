# datatables-webpack
This repository was created to investigate an issue where building JavaScript code related to DataTables initialization with webpack causes an error. 

# How to reproduce each case about Datatables initialization expression in Javascript
In this repository, success and error cases are differentiated by placing them in their respective git branches.
## "ok-split-into-two-files" branch
Yarn should be installed globally.
After cloning this repository on your local PC, run the following command from the root directory:

    $ git checkout ok-split-into-two-files
    $ cd myapps/static/js/__datatables__/
    $ yarn test

This will run the Jest tests and the tests should pass. 
Next, run the following command to build webpack and create tables.bundle.js in the directory above.

    $ yarn dev

As a next step, here's how to start Django's runserver to display DataTables using myapps/static/js/tables.bundle.js as the frontend Javascript.
# How to run Django's runserver
Assuming you already have a python virtual environment, go back to the root of this repository and run the command below.

    (venv)$ pip install -r requirements.txt
    (venv)$ cd myapps 
    (venv)$ python manage.py runserver

Visit http://localhost:8000/ in your local browser to see the sample DataTable page.
Open your browser's dev tools and look at the console to see if there are any errors. For the "ok-split-into-two-files" branch there should be no errors, except favicon errors.
    


