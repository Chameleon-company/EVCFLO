# Uploading Data to MongoDB (EVCFLO Database)
Sometimes a large amount of data needs to be uploaded to the database at once. This can be due to new datasets being discovered or completely new models and functionality being added to the database.
Therefore to upload the data we use a local flask webserver to push large csv files of data this has similar functionality as the normal flask API but more stripped down and basic in terms of function
[Video to Follow Along](https://youtu.be/2EjtMZ0rcfA)
## Files and structure
File structure and description of important files is as follows
- models (Exact same as the flask backend contains class' defining the models that are part of the database. New models would need to be added here)
- routes (Contain individual routes that contain a function that pulls the information from corresponding csv file, validates it and attempts to save the data to the MongoDB)
- Bounds_Coordinates, Suggestions_Coordinates, upload (a csv file containing new data to be uploaded, must ensure the correct format is followed for each csv or it likely wont work.)
- master data (a backup master data file in case the database needs to reset. Simply download all chargeStations from the database wipe it and then select this file for upload instead of upload)
- env (Contains file path information that needs to be switch for each user)
- server (main flask app file that serves the routes. The routes in here simply uploads the selected file. When the address is visited
## How to Upload Data
### Set up the virtual environment
- In csv_to_database folder create virtual env by running "python3 -m venv venv"
- Begun running it with ".\venv\Scripts\activate" (run "deactivate" to exit)
- Install flask and other dependencies by running "pip install flask flask_mongoengine"

### Now begin flask webserver
- cd into csv_to_db folder whilst virtual environment is active
- Launch server by running "python3 <span>server.py</span>"
- Ensure it is running by navigating to localhost:5000

### Data Setup
- In the <span>env.py</span> file change the file path to either upload.csv, bound_coordinates.csv or suggestions_coordinates to the file path for your PC. Include additional "\"s so path can be understood
- Next ensure the data is in the correct format and then replace in the relevant file with data you wish to upload
	- upload.csv is charge stations
		- name,address,description,location_category,location_sub_category,open_date,pricing,free_use,latitude, longitude,port_count,port_level_type,network,manufacturer,power_output_kw,power_output_volts,
  	  	  power_output_amps,renewable_power_supply,CHAdeMO,Tesla_std,Tesla_Fast,Tesla_Roadster,CCS_SAE, J1772,Type2,Commando,Wall_AU
		- Only name, latitude, longitude, source and source_date are required fields all others can be empty if they are not part of the dataset. (, must be included as they are csv's)
	- Bound_Coordinates.csv is coordinates of edges of a bounding box that data has been pulled from via scraping. 
		- north,south,east,west,source,source_date
		- All fields are required
	- Suggestions_Coordinates.csv is dummy suggested charger locations intended to be generated through machine learning
		- longitude,latitude,total_plugs,suitability_score
		- All fields are required

### Uploading New Data
- Now if you simply navigate to either localhost:5000/go_stations, localhost:5000/go_bounds or localhost:5000/go_suggested it will immediately push whatever the contents of the relevant file is to the database
- IMPORTANT NOTE: Please check master data.csv file to see if the chargestation dataset you are about to upload is already in the database as we dont want duplicates
- When the new dataset has been uploaded please append the dataset to the end of master data.csv file that is linked to the github and push just that change.
### Update master data
- If uploading charge stations simply append the new dataset to the end of master data

