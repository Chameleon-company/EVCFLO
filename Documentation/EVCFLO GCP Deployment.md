
# EVCFLO GCP Deployment
Both the frontend and backend are deployed to google cloud run and the process for doing so is almost identical for each element. 
[Video to Follow Along](https://youtu.be/MgzyTPDn8CE)
## Docker Setup/Testing
You might not need docker installed if you intend to push directly to the cloud. But by installing it you can test the compiled docker image before deploying to the cloud. As required changes may make things not work.
- Install Docker
	- Download and follow instructions for installing Docker on your device https://docs.docker.com/engine/install/
	- May need to enable virtualization in bios
	- May need to run wsl --update in command prompt
- Dockerize Files
	- If needed update Dockerfile.client or Dockerfile.api with any new required files/folders/libraries for backend or top level folders for frontend. And make sure requirements.txt has all requirements.
	- Make sure the docker daemon is running. Can be done by opening the application
	- Navigate to the api folder
		- Run "docker build -f Dockerfile.api -t app-api ." to build the docker image for backend
		- Run "docker run --rm -p 5000:5000 app-api" to test the built docker image
	- Run the front end normally npm start and you should see the backend interacting correctly 
- Stopping Local Docker Container
	- launch command prompt
	- run docker ps to locate container
	- run docker stop "container" with container replace with ID of the container
	- for example "docker stop 6df12453a611"
	- Or open the docker application and click stop on the container
## GCP Setup
- Begin by ensuring you have access the GCP project with your Deakin email address. 
	- Either you will already have it from a previous trimester
	- Or you will need to request access for the key team members using a form on one of the teams channels
	- The project is named "sit-22t1-ev-adoption-t-a4efab5" if they require this information.
	- Then log in into console.cloud.google.com using your Deakin email address
- Install GCP's Cloud SDK
	- Follow the steps for "Installing the latest gcloud CLI version" in the following link
		- https://cloud.google.com/sdk/docs/install-sdk
	- Also follow steps for initializing  "Initializing the gcloud CLI"
		- Use your deakin email address that is connect to the project
		- Select the project [sit-22t1-ev-adoption-t-a4efab5]
		- Select region [australia-souteast1-a]
	- Configure Docker to use Google Cloud CLI
		- Run command "gcloud auth configure-docker"
		- "Y"
## Frontend deployment
### Prepare files
- Navigate to the evcflofront folder
- Ensure config.production.js is present in src folder if not then request access
- Process can be improved but now any files that import config.testing need to be modified to instead import config.production
### Deploy Image
- Next run gcloud run deploy
- Press enter to select the current directory
- Name the service: "testing2"
- Enter "10" for the next step this is australia-southeast1
- The Google Cloud SDK will now go through the process of downloading, building and deploying the application to a new cloud run project.
	- This can take some time so be patient (4-7 minutes for the frontend)
- Once done you will be given a service url this does not matter though as we update the existing server to use this newly uploaded image.
### Deploy new revision
- Navigate to https://console.cloud.google.com/run?project=sit-22t1-ev-adoption-t-a4efab5 and you should see some services.
	- server: Is the backend
	- server2: Is the most recent uploaded revision of the backend
	- testing: Is the frontend (don't have enough permissions to change the name)
	- testing2: Should be the revision you just uploaded
- Select "testing" and click "edit & deploy new revision"
- Press "select" inside container image url
- From the dropdowns select "australia-southeast1"->"testing2"->"latest"
- Scroll down and select deploy
- Wait a short time and then visit the url: https://testing-e657pcuziq-ts.a.run.app
	- Initial startup time will be slow, but after will be responsive
## Backend deployment
### Prepare files
- Navigate to api folder
- Ensure you have the file <span>config.py</span>
### Deploy Image
- Follow the same steps for frontend deployment but instead name the service "server2"
- Wait until it is done
### Deploy new revision
- Follow the same steps for frontend deployment but instead select "server" and then from the drop downs select "australia-southeast1"->"server2"->"latest"
- Scroll down and deploy
- You can navigate to it directly via https://server-e657pcuziq-ts.a.run.app to see it is running
- Or visit the main webpage to see it is interacting with the website correctly
