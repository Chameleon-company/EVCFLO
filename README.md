# Chameleon- EV Charger Forecasting & Location Optimisation
This repository is designed to store various research conducted on EV charging stations globally with different datasets, analysis done on python & server used. It contains the frontend codes and upskilling information as well as the notebooks.

# Important links
Most Recent Handover Document: https://deakin365.sharepoint.com/sites/Chameleon2/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FChameleon2%2FShared%20Documents%2FEV%20Adoption%20Tools%2FProject%20Documentation%2F2022%20%2D%20T2%20EVCFLO%20Web%20Dev%20Handover%20%2Epdf&parent=%2Fsites%2FChameleon2%2FShared%20Documents%2FEV%20Adoption%20Tools%2FProject%20Documentation&p=true&ga=1

Trello board:  
https://trello.com/b/v3XH0ISE/evcflo-project

Most Recent Designs: https://www.figma.com/file/axhWCcz9kWJcxJEhWBrlbl/EVCFLO-Website?node-id=0-1&t=qKl8Ui4vvs12mFr7-0


# Installation
The frontend of the project is a combination of HTML, CSS and JS that is run on a React JS framework.
 
## To install React JS, you'll need to follow these steps:

Install Node.js: React requires Node.js to be installed on your system. You can download the latest version of Node.js from the official website: https://nodejs.org/en/download/

## To use a React JS code from GitHub and run it on Visual Studio, you'll need to follow these steps:

Clone the repository: Go to the GitHub repository that contains the React code that you want to use and clone it to your local machine. You can do this by clicking the "Clone or download" button and copying the URL.

Open the project in Visual Studio: Open Visual Studio and choose "Open a project or solution" from the start page. Navigate to the folder where you cloned the repository and choose the project file (usually named "package.json").

Install dependencies: In the Visual Studio terminal window, run the following command to install the project dependencies:
npm install

Run the project: Once the dependencies have been installed, you can run the project using the following command:
npm start

This will start the development server and open your project in a browser window. You should now be able to view and interact with the React application.

The backend of the project uses Python and a Flask framework.

### IDE:
The recommended IDE to use is VS Code, due to the ability to use it for all components of the project by simply adding in the plugins required for the language/framework being used. It is also cross platform so can be used on Windows, Linux or Mac. Download here: https://code.visualstudio.com/download

# Packaging and Deploying Docker container to Google Cloud Platform:
Refer the following GCP guide:
https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-serviceThis will walk you through creating the Dockerfile, requirements.txt, and .dockerignore files which are required in order to create the docker image. Substitute in the root server folder (containing server.py) instead of the sample helloworld.py source code.Note that these files are already existing in the project source code, but may require review or updating depending on your deployment.
Install the GCP CLI on your local machine:Refer the following guides for instructions on how to do this: https://cloud.google.com/sdk/docs/install 
Make sure the GCP CLI is initialized so that you are able to use it, refer this guide: https://cloud.google.com/sdk/docs/initializing
## Deploy to Cloud Run from source:
Refer to the section ‘Deploy to Cloud Run from source’ in the quickstartguide for the following.From the command prompt navigate to the root server folder containing server.py and run the following command:‘gcloud run deploy’ 
Press enter to select the current source code location.Enter ‘server’ for the service name
Select the region: ‘australia-southeast1’
Continue through the process until the service is complete, you will receive a service URL. This will be disregarded as we do not need to use it. Instead we will update the existing server to use the docker artifact whichwas just created on the GCP platform.

# Web Server API:
The web server providing access to the charger station database is written in Python using the Flask framework, and hosted on the Google Cloud Platform in a docker container. Source code on GitHub does not include the required /server/config/env.py file for security reasons.
Public URL:https://server-e657pcuziq-ts.a.run.app

Current Routes:
[/]
Method: GET
Returns: 'The server is running...' if the app is running.

[/api/get_chargers]
Method: GET
Returns: All of the chargerstation objects from the database as a json object.

[/api/get_bounds]
Method: GET
Returns: All of the bounding box objects from the database as a json object.

[/api/get_suggested]
Method: GET
Returns: All of the suggested points objects from the database as a json object.

[/api/search_chargers/<lat>/<lng>/<rad>]
Method: GET
Returns: Charger station objects from the database within km from geo location with latitude and longitude as a json object.

[/api/add_station]
Method: POST
Returns: 201 if successful, 400 if failed.
Note: Requires body to contain at least valid values for 'name', 'latitude', and 'longitude' parameters. The complete model for a charger station (parameter names and types) can be found in /models/ChargerStation.py
 
[/api/add_bounding]
Method: POST
Returns: 201 if successful, 400 if failed.
Note: Requires body to contain at least valid values for 'north', 'south', 'east', 'west', 'source', and 'source_date' parameters. 
The complete model for a bounding box (parameter names and types) can be found in /models/BoundingBox.py
 
[/api/add_suggested]
Method: POST
Returns: 201 if successful, 400 if failed.Note: Requires body to contain at least valid values for 'latitude', 'longitude', 'total_plugs', and 'suitability_score' parameters. The complete model for a charger station (parameter names and types) can be found in /models/SuggestedStation.py
 
[/api/db_populate]
Method: POST
Returns: 201 is successful, 400 if failed. Note: This simply adds 5 demo charger station entries to the database and used during development. This should be removed from production.
 
# Contact
T1.23 Company director: Chathu Ranaweera chathu.ranaweera@deakin.edu.au

T1.23 Project Lead: Barry Chen 
chenchaoyi@deakin.edu.au
  
T1.23 Data Science Team Lead: Ishika Khanna
khannai@deakin.edu.au

T1.23 Web Dev Team Lead: Yesini Liyanage
s222063923@deakin.edu.au


