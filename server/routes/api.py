# Route functions for /api/

# Import models.
from models.ChargerStation import ChargerStation

# Add a ChargerStation to the db, returns True if successful otherwise returns False.
def Add_Station(request):
    # Create a ChargeStation object to represent the new station..
    chargerStation_ = ChargerStation(name=request.form['name'], latitude=request.form['latitude'], longitude=request.form['longitude'])

    # Process the passed parameters from the form and update the object characteristics.
    try:
        #if 'name' in request.form: chargerStation_.name=request.form['name']
        if 'address' in request.form:chargerStation_.address=request.form['address']
        if 'description' in request.form: chargerStation_.description=request.form['description']
        if 'location_category' in request.form: chargerStation_.location_category=request.form['location_category']
        if 'location_sub_category' in request.form: chargerStation_.location_sub_category=request.form['location_sub_category']
        if 'open_date' in request.form: chargerStation_.open_date=request.form['open_date']
        if 'pricing' in request.form: chargerStation_.pricing=request.form['pricing']
        if 'free_use' in request.form: chargerStation_.free_use=request.form['free_use']
        #if 'latitude' in request.form: chargerStation_.latitude=request.form['latitude']
        #if 'longitude' in request.form: chargerStation_.longitude=request.form['longitude']
        if 'port_count' in request.form: chargerStation_.port_count=request.form['port_count']
        if 'port_level_type' in request.form: chargerStation_.port_level_type=request.form['port_level_type']
        if 'network' in request.form: chargerStation_.network=request.form['network']
        if 'manufacturer' in request.form: chargerStation_.manufacturer=request.form['manufacturer']
        if 'renewable_power_supply' in request.form: chargerStation_.renewable_power_supply=request.form['renewable_power_supply']
        if 'CHAdeMO' in request.form: chargerStation_.CHAdeMO=request.form['CHAdeMO']
        if 'Tesla_std' in request.form: chargerStation_.Tesla_std=request.form['Tesla_std']
        if 'Tesla_Fast' in request.form: chargerStation_.Tesla_Fast=request.form['Tesla_Fast']
        if 'Tesla_Roadster' in request.form: chargerStation_.Tesla_Roadster=request.form['Tesla_Roadster']
        if 'CCS_SAE' in request.form: chargerStation_.CCS_SAE=request.form['CCS_SAE']
        if 'J1772' in request.form: chargerStation_.J1772=request.form['J1772']
        if 'Type2' in request.form: chargerStation_.Type2=request.form['Type2']
        if 'Commando' in request.form: chargerStation_.Commando=request.form['Commando']
        if 'Wall_AU' in request.form: chargerStation_.Wall_AU=request.form['Wall_AU']

        # Attempt to parse float values, if fails default to 0...
        if 'power_output_kw' in request.form: 
            try:
                chargerStation_.power_output_kw=float(request.form['power_output_kw'])
            except:
                chargerStation_.power_output_kw = 0
        if 'power_output_volts' in request.form: 
            try:
                chargerStation_.power_output_volts=float(request.form['power_output_volts'])
            except:
                chargerStation_.power_output_volts=0
        if 'power_output_amps' in request.form: 
            try:
                chargerStation_.power_output_amps=float(request.form['power_output_amps'])
            except:
                chargerStation_.power_output_amps=0
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
             longitude = lngs[i]
            )
            chargerStation_.save()
        return True
    except:
        return False