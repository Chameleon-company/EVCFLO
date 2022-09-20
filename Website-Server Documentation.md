# Chameleon
# Electric Vehicle Forecasting and Location Optimization Web App Documentation

---
## Overview



---

## Google Cloud Platform
[Google Cloud Platform](https://console.cloud.google.com/)

Organization: Deakin.edu.au

Project Name: sit-22t1-ev-adoption-t-a4efab5

Project number: 809892333301

Project ID: sit-22t1-ev-adoption-t-a4efab5

Project Owner: Nghia Dang (ngh_adm@deakin.edu.au)


You will need to login to Google using Deakin credentials and obtain permission to access the project.

---

## Web Server
The web server providing access to the charger station database is written in Python using the Flask framework, and hosted on the Google Cloud Platform in a docker container. Source code on GitHub does not include the required /server/config/env.py file for security reasons.

### Public URL:
https://server-e657pcuziq-ts.a.run.app

### Current Routes:
*[/]*

Method: GET

Returns: 'The server is running...' if the app is running.


*[/api/get_chargers]*

Method: GET

Returns: All of the chargerstation objects from the database as a json object.


*[/api/get_bounds]*

Method: GET

Returns: All of the bounding box objects from the database as a json object.


*[/api/get_suggested]*

Method: GET

Returns: All of the suggested points objects from the database as a json object.


*[/api/search_chargers/lat/lng/rad]*

Method: GET

Returns: Chargerstation objects from the database within rad km from geo location with latitude lat and longitude lng as a json object.


*[/api/add_station]*

Method: POST

Returns: 201 if successful, 400 if failed.

Note: Requires body to contain at least valid values for 'name', 'latitude', and 'longitude' parameters. The complete model for a charger station (parameter names and types) can be found in /models/ChargerStation.py


*[/api/add_bounding]*

Method: POST

Returns: 201 if successful, 400 if failed.

Note: Requires body to contain at least valid values for 'north', 'south', 'east', 'west', 'source', and 'source_date' parameters. The complete model for a bounding box (parameter names and types) can be found in /models/BoundingBox.py


*[/api/add_suggested]*

Method: POST

Returns: 201 if successful, 400 if failed.

Note: Requires body to contain at least valid values for 'latitude', 'longitude', 'total_plugs', and 'suitability_score' parameters. The complete model for a charger station (parameter names and types) can be found in /models/SuggestedStation.py


*[/api/db_populate]*

Method: POST

Returns: 201 is successful, 400 if failed.

Note: This simply adds 5 demo charger station entries to the database and used during development. This should be removed from production.



### Documentation Links:
[About Google Cloud Run.](https://cloud.google.com/blog/topics/developers-practitioners/cloud-run-story-serverless-containers)

[Deploy a Python service to Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)

### To access:
From the GCP dashboard, search for 'cloud run' and choose 'Cloud Run' from the results.

Under the services page the web server is found under the name 'server'

Refer to google developer docs for instructions on updating/deploying flask app to the service.

---

## Front End
The front end is a very simple set of static webpages hosted in a bucket on Google Cloud Platform.

### Public URL:
https://storage.googleapis.com/evcflo_static_frontend/index.html

### Links:
[Host a static website](https://cloud.google.com/storage/docs/hosting-static-website)

### To access:
From the GCP dashboard, search for 'cloud storage' to display a list of all the buckets associated with the selected project.

The front end pages and resources are stored in the bucket named 'evcflo_static_frontend'

Files can be uploaded here directly.

---

## Database
The web app uses a NoSQL database hosted on MongoDB Atlas. At time of writing the database is yet to be migrated to GCP, and currently hosted on my personal atlas account. Contact me directly for further info (lrowell@deakin.edu.au)

### Links:
[MongoDB](https://cloud.mongodb.com/)

### Connection:
Connection String: mongodb+srv://username:password@cluster0.uoau0.mongodb.net/?retryWrites=true&w=majority


