# Import models.
from models.BoundingBox import BoundingBox
import pandas as pd
import env

def BoundCsvToDb():
    # Import data from csv, convert to bounding box model and save in the database.
    # Returns a message if successful or fails.

    #return ('script loaded ok')

    # Declare path to local file path
    filePath = env.BOUND_CSV_FILEPATH

    # Load the csv file and put into a dataframe
    df = pd.read_csv(filePath)

    # Iterate through the dataframe, create a bound object, and save to the database.
    try:
        # attempt to perform heavy lifting converting and saving charger station here.
        for i in range(len(df.index)):
            print(df['source'].iloc[i])
            boundingBox_ = BoundingBox(north=df['north'].iloc[i], south=df['south'].iloc[i], east=df['east'].iloc[i],
                                        west=df['west'].iloc[i], source=df['source'].iloc[i], source_date=df['source_date'].iloc[i])

            boundingBox_.save()

    except BaseException as err:
        # something went wrong up, send back an error message.
        print(f"Unexpected {err=}, {type(err)=}")
        raise
        return ('Something went wrong, check console for error...')

    return ('Processing completed...')

