# Import models.
from models.ChargerStation import ChargerStation
import pandas as pd
import env

def CsvToDb():
    # Import data from csv, convert to charger station model and save in the database.
    # Returns a message if successful or fails.

    #return ('script loaded ok')

    # Declare path to local file path
    filePath = env.CSV_FILEPATH

    # Load the csv file and put into a dataframe
    try:
        df = pd.read_csv(filePath)
        #print(df)
        print('Loaded .csv file')
    except BaseException as err:
        # something went wrong up, send back an error message.
        print(f"Unexpected {err=}, {type(err)=}")
        print('An error occurred loading .csv file')
        raise
        return ('Something went wrong loading .csv file, check console for error...')
	
    # Iterate through the dataframe, create a ChargerStation object, and save to the database.
    try:
        # attempt to perform heavy lifting converting and saving charger station here.
        for i in range(len(df.index)):
            chargerStation_ = ChargerStation(name=df['name'].iloc[i], latitude=df['latitude'].iloc[i], longitude=df['longitude'].iloc[i], source=df['source'].iloc[i], source_date=df['source_date'].iloc[i])
            
            print(df['address'].iloc[i])
            nonSpec = 'not specified'
            unkn = 'unknown'
            arr_unkn = ['unknown']
            
            # Clean the df - replace missing values with defaults.
            df['location_category'].fillna(nonSpec, inplace = True)
            df['location_sub_category'].fillna(nonSpec, inplace = True)
            df['address'].fillna(nonSpec, inplace = True)
            df['description'].fillna(nonSpec, inplace = True)
            df['open_date'].fillna(nonSpec, inplace = True)
            df['parking'].fillna(unkn, inplace = True)
            df['pricing'].fillna(unkn, inplace = True)
            df['free_use'].fillna(nonSpec, inplace = True)
            df['contact'].fillna(unkn, inplace = True)
            df['networks'].fillna(unkn, inplace = True)
            df['total_plugs'].fillna(0, inplace = True)
            df['port_level_type'].fillna(nonSpec, inplace = True)
            df['renewable_power_supply'].fillna(nonSpec, inplace = True)
            df['power_outputs_kw'].fillna(unkn, inplace = True)
            df['Plugs_CHAdeMO'].fillna(0, inplace = True)
            df['Plugs_Tesla'].fillna(0, inplace = True)
            df['Plugs_CCS_SAE'].fillna(0, inplace = True)
            df['Plugs_J1772'].fillna(0, inplace = True)
            df['Plugs_Type2'].fillna(0, inplace = True)
            df['Plugs_Three_Phase'].fillna(0, inplace = True)
            df['Plugs_Commando'].fillna(0, inplace = True)
            df['Plugs_Wall_AU_NZ'].fillna(0, inplace = True)
            df['Plugs_Caravan_Mains_Socket'].fillna(0, inplace = True)
            df['Plugs_Other'].fillna(0, inplace = True)

            
            # Populate the rest of the parameters from the df.
            chargerStation_.location_category = df['location_category'].iloc[i]
            chargerStation_.location_sub_category = df['location_sub_category'].iloc[i]
            chargerStation_.address = df['address'].iloc[i]
            chargerStation_.description = df['description'].iloc[i]
            chargerStation_.open_date = df['open_date'].iloc[i]
            chargerStation_.parking = df['parking'].iloc[i]
            chargerStation_.pricing = df['pricing'].iloc[i]
            chargerStation_.free_use = df['free_use'].iloc[i]
            chargerStation_.contact = df['contact'].iloc[i]
            chargerStation_.networks = df['networks'].iloc[i]
            chargerStation_.total_plugs = df['total_plugs'].iloc[i]
            chargerStation_.port_level_type = df['port_level_type'].iloc[i]
            chargerStation_.renewable_power_supply = df['renewable_power_supply'].iloc[i]
            chargerStation_.power_outputs_kw = df['power_outputs_kw'].iloc[i]
            chargerStation_.Plugs_CHAdeMO = df['Plugs_CHAdeMO'].iloc[i]
            chargerStation_.Plugs_Tesla = df['Plugs_Tesla'].iloc[i]
            chargerStation_.Plugs_CCS_SAE = df['Plugs_CCS_SAE'].iloc[i]
            chargerStation_.Plugs_J1772 = df['Plugs_J1772'].iloc[i]
            chargerStation_.Plugs_Type2 = df['Plugs_Type2'].iloc[i]
            chargerStation_.Plugs_Commando = df['Plugs_Commando'].iloc[i]
            chargerStation_.Plugs_Wall_AU_NZ = df['Plugs_Wall_AU_NZ'].iloc[i]
            chargerStation_.Plugs_Caravan_Mains_Socket = df['Plugs_Caravan_Mains_Socket'].iloc[i]
            chargerStation_.Plugs_Other = df['Plugs_Other'].iloc[i]

            chargerStation_.save()

    except BaseException as err:
        # something went wrong up, send back an error message.
        print(f"Unexpected {err=}, {type(err)=}")
        raise
        return ('Something went wrong converting data to charger station, check console for error...')

    return ('Processing completed...')

