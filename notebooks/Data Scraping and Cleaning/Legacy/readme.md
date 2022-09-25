# Legacy Data Scrapping Method
These files were temporarily used to scrape data from the PlugShare website which holds a much larger number of chargers and more detail about them
than google. Unfortunately after running some time to collect data points from the Greater Melbourne area it was discovered data scrapping was being blocked.
Due to this it was decided to no longer use this method as it was unethical and we did not have permission to send so many requests to their website as it is
against their terms of service.

# Make VSCode - Coordinates (Legacy)
- Code that converts four compass boundings of a bounding box to a midpoint and span of the box
- These values need to be copied to VSCode Scan

# VSCode Scan (Plugshare)
- Excel file with visual basic code that scraps from plughsare and updates the excel file it is in with data points
- Click developer tab, then visual basic, then Module1 to view the visual basic code
- If wish to scan update latitude, longitude, spanLat and spanLong with values collected from (Make VScode - Coordinates (Legacy))
- Click Run
- Wait some time and if scrapping isn't blocked the excel file will update with all points in range

# Clean VSCode - Results (Legacy)
- Notebook file which cleans the excel file generated from plugshare scraping, totaling chargers and combining relevant columns aswell as removing others
- Simply follow comments in notebook replacing only name of files and will output cleaned csv