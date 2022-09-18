# Route functions for /api/

# Import models.
from models.ChargerStation import ChargerStation
from models.BoundingBox import BoundingBox
from models.SuggestedStation import SuggestedStation

# Add a ChargerStation to the db, returns True if successful otherwise returns False.
def Add_Station(request):
    # Create a ChargeStation object to represent the new station..
    chargerStation_ = ChargerStation(name=request.form['name'], latitude=request.form['latitude'], longitude=request.form['longitude'], source=request.form['source'], source_date=request.form['source_date'])

    # Process the passed parameters from the form and update the object characteristics.
    try:
        #if 'name' in request.form: chargerStation_.name=request.form['name']
        if 'location_category' in request.form: chargerStation_.location_category=request.form['location_category']
        if 'location_sub_category' in request.form: chargerStation_.location_sub_category=request.form['location_sub_category']
        if 'address' in request.form:chargerStation_.address=request.form['address']
        if 'description' in request.form: chargerStation_.description=request.form['description']
        if 'open_date' in request.form: chargerStation_.open_date=request.form['open_date']
        if 'parking' in request.form: chargerStation_.parking=request.form['parking']
        if 'pricing' in request.form: chargerStation_.pricing=request.form['pricing']
        if 'free_use' in request.form: chargerStation_.free_use=request.form['free_use']
        if 'contact' in request.form: chargerStation_.contact=request.form['contact']
        #if 'latitude' in request.form: chargerStation_.latitude=request.form['latitude']
        #if 'longitude' in request.form: chargerStation_.longitude=request.form['longitude']
        if 'total_plugs' in request.form: chargerStation_.total_plugs=request.form['total_plugs']
        if 'port_level_type' in request.form: chargerStation_.port_level_type=request.form['port_level_type']
        if 'renewable_power_supply' in request.form: chargerStation_.renewable_power_supply=request.form['renewable_power_supply']
        if 'Plugs_CHAdeMO' in request.form: chargerStation_.Plugs_CHAdeMO=request.form['Plugs_CHAdeMO']
        if 'Plugs_Tesla' in request.form: chargerStation_.Plugs_Tesla=request.form['Plugs_Tesla']
        if 'Plugs_CCS_SAE' in request.form: chargerStation_.Plugs_CCS_SAE=request.form['Plugs_CCS_SAE']
        if 'Plugs_J1772' in request.form: chargerStation_.Plugs_J1772=request.form['Plugs_J1772']
        if 'Plugs_Type2' in request.form: chargerStation_.Plugs_Type2=request.form['Plugs_Type2']
        if 'Plugs_Commando' in request.form: chargerStation_.Plugs_Commando=request.form['Plugs_Commando']
        if 'Plugs_Wall_AU_NZ' in request.form: chargerStation_.Plugs_Wall_AU_NZ=request.form['Plugs_Wall_AU_NZ']
        if 'Plugs_Caravan_Mains_Socket' in request.form: chargerStation_.Plugs_Caravan_Mains_Socket=request.form['Plugs_Caravan_Mains_Socket']
        if 'Plugs_Other' in request.form: chargerStation_.Plugs_Other=request.form['Plugs_Other']

        # Attempt to parse array values, if fails default to ["unknown"]...
        if 'power_outputs_kw' in request.form: 
            try:
                array = (request.form['power_outputs_kw']).split(',')
                outputs = [float(i) for i in array]
                chargerStation_.power_outputs_kw = outputs
            except:
                chargerStation_.power_outputs_kw = ["unknown"]

        if 'networks' in request.form:
            try:
                array = (request.form['networks']).split(',')
                chargerStation_.networks = array
            except:
                chargerStation_.networks = ["unknown"]

    except BaseException as err:
        print(f"Unexpected {err=}, {type(err)=}")
        raise
        return False

    # Save the charger station to the database.
    print('charger station received, saving to db..')
    try:
        chargerStation_.save()
        return True
    except BaseException as err:
        print(f"Unexpected {err=}, {type(err)=}")
        raise
        return False
    
    # If reaches this point the entry was successful.
    return True

#WIP - Form interpretation to add bounding box to the database
def Add_Bounding(request):

    boundingBox_ = BoundingBox(north=request.form['north'], south=request.form['south'], east=request.form['east'],
                               west=request.form['west'], source=request.form['source'], source_date=request.form['source_date'])

    # Save the bounding box to the database.
    print('bounding box received, saving to db..')
    try:
        boundingBox_.save()
        return True
    except BaseException as err:
        print(f"Unexpected {err=}, {type(err)=}")
        raise
        return False
    
    # If reaches this point the entry was successful.
    return True

#WIP - Form interpretation to add suggested station to the database
def Add_Suggested(request):

    suggestedStation_ = SuggestedStation(longitude=request.form['longitude'], latitude=request.form['latitude'], 
                                         total_plugs=request.form['total_plugs'], suitability_score=request.form['suitability_score'])

    # Save the suggested station to the database.
    print('suggested station received, saving to db..')
    try:
        suggestedStation_.save()
        return True
    except BaseException as err:
        print(f"Unexpected {err=}, {type(err)=}")
        raise
        return False
    
    # If reaches this point the entry was successful.
    return True

    return True

# Populates the db with demo markers. Returns True if successful, otherwise False.
def DB_Populate(request):
    # Declare arrays for names, latitudes, and longitudes..
    names = ['Melbourne', 'demo 1', 'demo 2', 'demo 3', 'demo 4']
    lats = [-37.8136, -37.80, -37.75, -37.9, -37.85]
    lngs = [144.9631, 144.97, 145.02, 145.015, 144.84]
    
    # Generate ChargerStations using minimum parameters and save to db..
    try:
        for i in range(5):
            chargerStation_ = ChargerStation(
             name=names[i],
             description="A Demo marker made from a POST request to /api/db-populate",
             latitude = lats[i],
             longitude = lngs[i],
             source="Generated - Test Marker"
            )
            chargerStation_.save()
        return True
    except:
        return False

# Search the database
def DB_Search_Chargers(lat=0, lng=0, rad=0):
    print('Get chargers search request received. Accessing db...')

    # Convert incoming strings to floats
    lat = float(lat)
    lng = float(lng)
    rad = float(rad)

    chargerStations = []
    # 1 latitude/longitude point = 111km
    radConversion = rad/111
    north = lat + radConversion
    south = lat - radConversion
    east = lng + radConversion
    west = lng - radConversion
    print (str(north) + ", " + str(south) + ", " + str(east) + ", " + str(west))
    for chargerStation in ChargerStation.objects:
        # Check if the charger station from the db is within the search area, if so add to the list of results.
        if (chargerStation.latitude < north and chargerStation.latitude > south and chargerStation.longitude < east and chargerStation.longitude > west):
            print ("in range")
            chargerStations.append(chargerStation)
    return chargerStations