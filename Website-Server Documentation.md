## Chameleon EV Forecasting and Location Optimization Project Documentation...

### Google Cloud Platform
[Google Cloud Platform] (https://console.cloud.google.com/)
Organization: Deakin.edu.au
Project Name: sit-22t1-ev-adoption-t-a4efab5
Project number: 809892333301
Project ID: sit-22t1-ev-adoption-t-a4efab5

Project Owner: Nghia Dang (ngh_adm@deakin.edu.au)


You will need to login to Google using Deakin credentials and obtain permission to access the project.



### Web Server
The web server providing access to the charger station database is written in Python using the Flask framework, and hosted on the Google Cloud Platform in a docker container.

Public URL:
https://server-e657pcuziq-ts.a.run.app

Current Routes:
[/]
Method: GET
Returns: 'The server is running...' if the app is running.

[/api/get_chargers]
Method: GET
Returns: All of the chargerstation objects from the database as a json object.

[/api/add_station]
Method: POST
Returns: 201 if successful, 400 if failed.
Note: Requires body to contain at least valid values for 'name', 'latitude', 'longitude' parameters. The complete model for a charger station (parameter names and types) can be found in /models/ChargerStation.py


[/api/db_populate]
Method: POST
Returns: 201 is successful, 400 if failed.
Note: This simply adds 5 demo charger station entries to the database and used during development. This should be removed from production.


Documentation Links:
[About Google Cloud Run.](https://cloud.google.com/blog/topics/developers-practitioners/cloud-run-story-serverless-containers)
[Deploy a Python service to Cloud Run] (https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)

To access:
From the GCP dashboard, search for 'cloud run' and choose 'Cloud Run' from the results.
Under the services page the web server is found under the name 'server'
Refer to google developer docs for instructions on updating/deploying flask app to the service.



### Front End
The front end is a very simple set of static webpages hosted in a bucket on Google Cloud Platform.

Links:
[Host a static website] (https://cloud.google.com/storage/docs/hosting-static-website)

To access:
From the GCP dashboard, search for 'cloud storage' to display a list of all the buckets associated with the selected project.
The front end pages and resources are stored in the bucket named 'evcflo_static_frontend'
Files can be uploaded here directly.