
# Flask Backend and Webserver API
The flask backend is quite simple it is mostly a number of routes that perform calculations using python to either pull specific data from the mongoDB database or in future perform more complex machine learning calculations responsively
Public URL: [https://server-e657pcuziq-ts.a.run.app](https://server-e657pcuziq-ts.a.run.app)
[Video to Follow Along](https://youtu.be/bMOsU2jYGzo)
## Functionality
### Files and structure
The file structure of important files/folders descriptions is as follows
- models (This contains a number of python files that define mongo models using the mongoEngine library. This lets us create objects that can either be understood when pulled from mondoDB or directly sent to mongoDB)
- routes (This contains a single file that defines a number of functions used for converting input html form to the aforementioned model. Validation is performed on the inputs and at the end the object is attempted to be saved to the database.
- venv (once set up) (A simple virtual environment each developer needs to set up upon beginning development. When testing locally
- <span>api.py</span> (Main app file this defines all of the routes and what is done when they are called. This are the functions that can be used in the frontend by typing config.API_URL. Both GET and POST functions are used here and the more complex post functions use the function define in routes folder
- <span>config.py</span> (Config file contains sensitive database connection and log in information.)
- requirements.txt (Contains the required libraries for app to function.
### Routes
_[/]_
Method: GET
Returns: 'The server is running...' if the app is running.

_[/api/get_chargers]_
Method: GET
Returns: All of the chargerstation objects from the database as a json object.

_[/api/get_bounds]_
Method: GET
Returns: All of the bounding box objects from the database as a json object.

_[/api/get_suggested]_
Method: GET
Returns: All of the suggested points objects from the database as a json object.

_[/api/search_chargers/lat/lng/rad]_
Method: GET
Returns: Chargerstation objects from the database within rad km from geo location with latitude lat and longitude lng as a json object.

_[/api/add_station]_
Method: POST
Returns: 201 if successful, 400 if failed.
Note: Requires body to contain at least valid values for 'name', 'latitude', and 'longitude' parameters. The complete model for a charger station (parameter names and types) can be found in /models/ChargerStation.py

_[/api/add_bounding]_
Method: POST
Returns: 201 if successful, 400 if failed.
Note: Requires body to contain at least valid values for 'north', 'south', 'east', 'west', 'source', and 'source_date' parameters. The complete model for a bounding box (parameter names and types) can be found in /models/BoundingBox.py

_[/api/add_suggested]_
Method: POST
Returns: 201 if successful, 400 if failed.
Note: Requires body to contain at least valid values for 'latitude', 'longitude', 'total_plugs', and 'suitability_score' parameters. The complete model for a charger station (parameter names and types) can be found in /models/SuggestedStation.py

_[/api/db_populate]_
Method: POST
Returns: 201 is successful, 400 if failed.
Note: This simply adds 5 demo charger station entries to the database and used during development. This should be removed from production.
## Development
Developing new functionality for the back end is quite simple.
- If a new field is required in the database simply create a new model file for it. And create matching route for it.
	- Say we wanted to add important retail locations to the database and website
	- We would first create a model file with information important to retail locations (lat, long, size, popularity) called retailLocation in the models folder. Using another model as a base.
	- We could then create an Add_retail function in <span>routes.py</span> so we can add them individually copying most from another Add route just changing relevant information and naming.
	- Next if we want to be able to pull this information on the website we need to create a route in the <span>api.py</span> file.
	- We could create a route with @app.route('/api/get_retail, methods=['GET'])
	- Define a function for it called get_retail and copy the functionality from get_chargers. Replacing the mention of chargeStation object with our retailLocation object. 
	- Now if we have uploaded some data to the mongoDB when we call this route on the frontend it will be returned a json file contain the lat, long, size and popularity of all the retail locations we added.

- This process provides the basic building blocks for adding new functions to the backend. With this you could perform more complicated task such as adding a new route that calls a function from the routes folder. This function might take the location handed to it by the front end and perform complex calculations looking at nearby chargestations and other things like retail and population density and output a result like is this a good spot or what type of charger could be good here. This is the ideal functionality of this site.
