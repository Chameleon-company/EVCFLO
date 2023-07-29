# Google data scrapping and cleaning
Files here are used to either scrape data using a google API key obtained from cloud or to facilitate merging of a 
new dataset with the one in the database with the goal of preventing new duplicates

# Format GeoJson
- The first step in collecting new data to add to database is to produce a number of bounding box's to be scanned
- We use a number of bounding box's so we can scan whole regions and parts and so we dont scan vast regions that will have no chargers(deserts, off the coast, big lakes)
- So begin by visiting geojson.io and drawing a number of bounding box's in the region you wish to scan try avoiding ocean and areas there wont be chargers
- Download the geojson file by saving it as a GeoJSON file
- Open Format GoeJson notebook
- Follow steps to produce a new coordinates file and a bounding box's file
- Coordinates file is to use when scanning locations in the areas and bounding box's must be uploaded to database when you upload the chargers you find

# Google API (EV CHargers) - GeoJson/Test
- Two files very similar, following is descriptiion of running GeoJson one as this loops through a number of bounding box's the test one does the same thing but with a manually specified region once
- In file you may first need to update the API_key with a new one from GCP making sure it has the Places_API enabled (try not to scan too much as budget for scanning is limited on account)
- May also need to pip install a number of different libraries imported.
- Read the coordinates created using Format GeoJson
- Important to remember if you are scanning a number of bounding box's only run code above the break once each time you do so
- Now run the following code box's pausing at the conduct the search box until it is done.
- Running through the rest of the lines will then format the scrapped data and save it as a csv file named test_name# in the Files folder
- Repeat this for all bounding box's that are in your list

# Merge Google API Scraped
- Notebook used to merge all of the seperate files generated from running Google API (EV Chargers) - GeoJson/Test
- Simply replace the count with number of bounding box's and name with the name used for files and run the cells this will prodduce a merged csv file you can then add to database using csv_to_database
- Some additional code is in this file this was used when cleaning and fixing database structure. (Can use to help if needing to do something similar)

# Merge with DB
- File prepared for creation of code that can dynamically merge new data with that in the database while keeping most relevant data, merging conflicting and deleting duplicates
- Goal is to produce code that does this quickly and efficiently so new dataset can be added to the database with complicated cleaning process
- Can likely pull data from mongo db using python libraries and and push to database from here if becomes easiest process wusing the API functionalities