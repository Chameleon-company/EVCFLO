# Import environment variables.
from env import DB_URI

# Import resources.
from flask import Flask, make_response, request, jsonify, render_template, send_from_directory
from flask_mongoengine import MongoEngine
from routes.csv_to_db import CsvToDb
from routes.bound_csv_to_db import BoundCsvToDb
from routes.suggested_csv_to_db import SuggestedCsvToDb

# Set run environment variable to determine how server will run.
run_environment = 'LOCAL'
#run_environment = 'LIVE'

# Declare instance of flask.
# static_folder and template_folder tells flask where to look for files when rendering static html web pages.
# render_template will look in the templates folder for the html file, while anything referenced in the html file (css/js) will be looked up from the static folder.
# A better practice is to allow the server to serve the webpages rather than using flask (apache, nginx, etc..).
app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')

# Declare db connection information (connection URI pulled from /config/env.py)
app.config['MONGODB_HOST'] = DB_URI

# initialize connection to db.
db = MongoEngine()
db.init_app(app)


########
# ROUTES
########

# The homepage.
@app.route('/', methods=['GET'])
def HomePage():
    # Return a simple message if the server is up.
    return ('The server is running... Use route "/go_stations", "/go_bounds", "/go_suggested" to launch csv to db')

@app.route('/go_stations', methods=['GET'])
def Go_Stations():
    # Attempt to run import...
    response = CsvToDb()
    return (response)

@app.route('/go_bounds', methods=['GET'])
def Go_Bounds():
    # Attempt to run import...
    response = BoundCsvToDb()
    return (response)

@app.route('/go_suggested', methods=['GET'])
def Go_Suggested():
    # Attempt to run import...
    response = SuggestedCsvToDb()
    return (response)

# Initialize server...
if __name__ == '__main__':
    if (run_environment == 'LIVE'):
        app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
    else:
        app.run()
