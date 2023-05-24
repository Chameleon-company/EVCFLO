# Getting Started
Video Link: [Video to Follow Along](https://youtu.be/01EcRiAeFRY)

### IDE:
The recommended IDE to use is VS Code, due to the ability to use it for all components of the project by simply adding in the plugins required for the language/framework being used. It is also cross platform so can be used on Windows, Linux or Mac. Download here: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
## Installing Repo
Clone the repository: Go to the GitHub repository that contains the React code that you want to use and clone it to your local machine. You can do this by clicking the "Clone or download" button and copying the URL.

Open the project in Visual Studio: Open Visual Studio and choose "Open a project or solution" from the start page. Navigate to the folder where you cloned the repository and choose the project file (usually named "package.json").
### Additional Project Files
For security purposes some files are excluded from the git repo using a gitignore file. Request the most up to date version of these files from a team lead. (These files currently include <span>config.py</span> which goes in the api folder. And config.production.js which goes in the src folder although is only used for production builds)

## Setting up React
The frontend of the project is a combination of HTML, CSS and JS that is run on a React JS framework. When getting started with a new repo a few steps need to be followed
### Install Node.js: 
- React requires Node.js to be installed on your system. You can download the latest version of Node.js from the official website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
### Install dependencies:
-  In the Visual Studio terminal window, run the following command to install the project dependencies: npm install this will create the node_modules folder that is not included in the github. This is also excluded in using the .gitignore file.
	- Make sure you are in the folder containing the file package.json

## Setting up Flask
The backend of the website is serviced by a flask API that allows the website to make connections and perform calculations from the MongoDB database. To set up this flask web server for local testing we need to set up a virtual machine (VM). This is not included in the GitHub files as the venv is locally dependent.
### Set up the virtual environment:
- Navigate to the API folder in the console
- Create a VM by running the command "python3 -m venv venv"
	- This creates a local VM the server can run on. The files created here should not be included or pushed to the GitHub as the folder "venv" is included in the .ignore file
- While still in the API folder begin running the VM using the command ".\venv\Scripts\activate"
	- This starts up the VM and any future commands are now run in the virtual machine
	- !Disclaimer! - May need to enable virtualization in the bios for this to work.
	- To exit this VM run the command "deactivate
### Install dependencies:
- While in the activated VM run the command "pip install flask==2.2.3 flask_mongoengine python-dotenv flask_mongoengine flask_cors gunicorn"
- Check the requirements.txt file in the API folder to see if any additional libraries should be added and install them.
	- Additionally if when developing new backend API functions new libraries are required add them to requirements.txt as both deployment and future development will require them.

## Operating and Testing a Fully local deployment
These short instructions detail how to test the website locally to ensure your changes will work. Previously when developing the frontend we simply used the live version of the flask API as we didn't have any tasks we wanted to immediately develop on it. Now with this new set up new changes the API such as machine learning calculations or complex requests from the database can be developed and tested alongside changes to the front end.
### Important Points
- The Local Flask API runs on the url http[]()://localhost:5000/api
- The local react page runs on the url http[]()://localhost:3000
- Any requests to the flask API should use the config.API_URL from config.testing.js
- The real google key is excluded from the GitHub, should it be required in testing request it from team lead.
- Ensure you have obtain the <span>config.py</span> file from team leads and added it to the API folder
### Instructions
- Navigate to the API folder in the terminal and start the VM by running ".\venv\Scripts\activate"
- Start the flask app by running "flask run"
	- Ensure it is running properly by visiting localhost:5000 in your browser.
- Start a new terminal and navigate to the evcflofront folder.
- Start the react front end by running "npm start"
- The page localhost:3000 will open automatically in your browser.
- You can now actively make and save changes to the frontend and they will be reflected here.
- Any changes to the backend/API will likely require reentering that terminal and restarting it.
- Both instances can be exited by pressing "ctrl + c"


