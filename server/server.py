# Import environment variables.
from config.env import DB_URI

# Import models.
from models.ChargerStation import ChargerStation

# Import routes
from routes.api import Add_Station, DB_Populate

# Import resources.
from flask import Flask, make_response, request, jsonify, render_template, send_from_directory
from flask_mongoengine import MongoEngine
from flask_cors import CORS

# Declare instance of flask.
# static_folder and template_folder tells flask where to look for files when rendering static html web pages.
# render_template will look in the templates folder for the html file, while anything referenced in the html file (css/js) will be looked up from the static folder.
# A better practice is to allow the server to serve the webpages rather than using flask (apache, nginx, etc..).
app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')

# Initialize CORS to allow external API queries.
CORS(app)

# Declare db connection information (connection URI pulled from /config/env.py)
app.config['MONGODB_HOST'] = DB_URI

# initialize connection to db.
db = MongoEngine()
db.init_app(app)

# Set run environment variable to determine how server will run.
run_environment = 'LOCAL'
#run_environment = 'LIVE'


########
# ROUTES
########

# The homepage.
@app.route('/', methods=['GET'])
def HomePage():
    #return ('The server is running...')
    return render_template('./public/index.html')


# Fetches all the ChargerStations in the db and returns as a JSON object..
@app.route('/api/get_chargers', methods=['GET'])
def get_chargers():
    print('Get chargers request received. Accessing db...')
    chargerStations = []
    for chargerStation in ChargerStation.objects:
        chargerStations.append(chargerStation)
    return make_response(jsonify(chargerStations), 200)


# Gets the charger station data from the form body and creates a db entry for it...
@app.route('/api/add_station', methods=['POST'])
def add_station():
    result = Add_Station(request)
    print(result)
    if result == True:
        return make_response('Charger station entered...', 201)
    else:
        return make_response('An error occurred...', 400)


# A testing route to add a demo marker to the db.
@app.route('/api/db_populate', methods=['POST'])
def db_populate():
    result = DB_Populate(request)
    if result == True:
        return make_response('db successfully updated...', 201)
    else:
        return make_response('An error occurred...', 400)




# Initialize server...
if __name__ == '__main__':
    if (run_environment == 'LIVE'):
        app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
    else:
        app.run()


