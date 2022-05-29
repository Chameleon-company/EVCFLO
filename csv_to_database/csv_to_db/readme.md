# CSV_TO_DB Readme

## Running virtual environment
This requires python 3 to be installed on your machine.
1. Navigate to the root folder of this in command line (from file explorer type 'cmd .' into the address bar).
2. Change to the 'scripts' folder ('cd scripts')
3. Start the python virtual environment using command 'activate'

## Running server
4. Go back to the root directory ('cd..')
5. launch the server using command 'python3 server.py'
6. Confirm server is running by opening the browser window and navigating to http://localhost:5000 and making sure you get a message saying server is running.
7. Server can be shutdown from the command line by pressing CNTL+C

## Processing .csv files.
This script is required to run from within a flask server, there are other ways to do this (ie as a simple script) however this is how I chose to do it for the purpose of potentially integrating it into the web server later.
1. Ensure FILEPATH variable in env.py is equal to the local path to the csv file to import before launching server. If it was changed shutdown and restart server.
2. Navigate browser to http://localhost:5000/go
3. If successful you will get a message back saying processing complete.

## Notes:
env.py username, password and database connection strings removed for security.
contact lrowell@deakin.edu.au
