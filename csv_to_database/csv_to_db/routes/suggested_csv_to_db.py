# Import models.
from models.SuggestedStation import SuggestedStation
import pandas as pd
import env

def SuggestedCsvToDb():
    # Import data from csv, convert to bounding box model and save in the database.
    # Returns a message if successful or fails.

    #return ('script loaded ok')

    # Declare path to local file path
    filePath = env.SUGGESTED_CSV_FILEPATH

    # Load the csv file and put into a dataframe
    df = pd.read_csv(filePath)
    print(df)
    
    # Iterate through the dataframe, create a bound object, and save to the database.
    try:
        # attempt to perform heavy lifting converting and saving charger station here.
        for i in range(len(df.index)):
            suggestedStation_ = SuggestedStation(longitude=df['longitude'].iloc[i], latitude=df['latitude'].iloc[i], total_plugs=df['total_plugs'].iloc[i],
                                                 suitability_score=df['suitability_score'].iloc[i])

            suggestedStation_.save()

    except BaseException as err:
        # something went wrong up, send back an error message.
        print(f"Unexpected {err=}, {type(err)=}")
        raise
        return ('Something went wrong, check console for error...')

    return ('Processing completed...')

