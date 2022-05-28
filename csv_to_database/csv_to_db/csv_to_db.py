# Import models.
from ChargerStation import ChargerStation
from flask_mongoengine import MongoEngine
import numpy as np
import pandas as pd
import env

def CsvToDb():
    # Import data from csv, convert to charger station model and save in the database.
    # Returns a message if successful or fails.

    #return ('script loaded ok')

    # Declare path to local file path
    filePath = env.CSV_FILEPATH

    # Load the csv file and put into a dataframe
    df = pd.read_csv(filePath)

    # Iterate through the dataframe, create a ChargerStation object, and save to the database.
    try:
        # attempt to perform heavy lifting converting and saving charger station here.
        for i in range(len(df.index)):
            chargerStation_ = ChargerStation(name=df['name'].iloc[i], latitude=df['latitude'].iloc[i], longitude=df['longitude'].iloc[i],)
            
            print(df['address'].iloc[i])
            nonSpec = 'not specified'

            # Clean the df - replace missing values with defaults.
            df['address'].fillna(nonSpec, inplace = True)
            df['description'].fillna(nonSpec, inplace = True)
            df['location_category'].fillna(nonSpec, inplace = True)
            df['location_sub_category'].fillna(nonSpec, inplace = True)
            df['open_date'].fillna(nonSpec, inplace = True)
            df['pricing'].fillna(nonSpec, inplace = True)
            df['free_use'].fillna(nonSpec, inplace = True)
            df['port_count'].fillna(0, inplace = True)
            df['port_level_type'].fillna(nonSpec, inplace = True)
            df['network'].fillna(nonSpec, inplace = True)
            df['manufacturer'].fillna(nonSpec, inplace = True)
            df['renewable_power_supply'].fillna(nonSpec, inplace = True)
            df['CHAdeMO'].fillna(0, inplace = True)
            df['Tesla_std'].fillna(0, inplace = True)
            df['Tesla_Fast'].fillna(0, inplace = True)
            df['Tesla_Roadster'].fillna(0, inplace = True)
            df['CCS_SAE'].fillna(0, inplace = True)
            df['J1772'].fillna(0, inplace = True)
            df['Type2'].fillna(0, inplace = True)
            df['Commando'].fillna(0, inplace = True)
            df['Wall_AU'].fillna(0, inplace = True)

            # Populate the rest of the parameters from the df.
            chargerStation_.address = df['address'].iloc[i]
            chargerStation_.description = df['description'].iloc[i]
            chargerStation_.location_category = df['location_category'].iloc[i]
            chargerStation_.location_sub_category = df['location_sub_category'].iloc[i]
            chargerStation_.open_date = df['open_date'].iloc[i]
            chargerStation_.pricing = df['pricing'].iloc[i]
            chargerStation_.free_use = df['free_use'].iloc[i]
            chargerStation_.port_count = df['port_count'].iloc[i]
            chargerStation_.port_level_type = df['port_level_type'].iloc[i]
            chargerStation_.network = df['network'].iloc[i]
            chargerStation_.manufacturer = df['manufacturer'].iloc[i]
            chargerStation_.renewable_power_supply = df['renewable_power_supply'].iloc[i]
            chargerStation_.CHAdeMO = df['CHAdeMO'].iloc[i]
            chargerStation_.Tesla_std = df['Tesla_std'].iloc[i]
            chargerStation_.Tesla_Fast = df['Tesla_Fast'].iloc[i]
            chargerStation_.Tesla_Roadster = df['Tesla_Roadster'].iloc[i]
            chargerStation_.CCS_SAE = df['CCS_SAE'].iloc[i]
            chargerStation_.J1772 = df['J1772'].iloc[i]
            chargerStation_.Type2 = df['Type2'].iloc[i]
            chargerStation_.Commando = df['Commando'].iloc[i]
            chargerStation_.Wall_AU = df['Wall_AU'].iloc[i]

            chargerStation_.save()

    except BaseException as err:
        # something went wrong up, send back an error message.
        print(f"Unexpected {err=}, {type(err)=}")
        raise
        return ('Something went wrong, check console for error...')

    return ('Processing completed...')

