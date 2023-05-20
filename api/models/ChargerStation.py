# This class defines the chargerstation model

from flask_mongoengine import MongoEngine

db = MongoEngine()

# Define class for a chargerstation..
class ChargerStation(db.Document):
    name = db.StringField(required=True)
    address = db.StringField(default='not specified')
    longitude = db.FloatField(required=True)
    latitude = db.FloatField(required=True)
    location_category = db.StringField(default='not specified')
    location_sub_category = db.StringField(default='not specified')
    description = db.StringField(default='not specified')
    open_date = db.StringField(default='unknown')
    parking = db.StringField(default='unknown')
    pricing = db.StringField(default='unknown')
    free_use = db.StringField(default='not specified')
    contact = db.StringField(default='unknown')
    networks = db.StringField(default='unknown')
    total_plugs = db.IntField(default=0)
    port_level_type = db.StringField(default='not specified')
    renewable_power_supply = db.StringField(default='unknown')
    power_outputs_kw = db.StringField(default='unknown')
    Plugs_CHAdeMO = db.IntField(default=0)
    Plugs_Tesla = db.IntField(default=0)
    Plugs_CCS_SAE = db.IntField(default=0)
    Plugs_J1772 = db.IntField(default=0)
    Plugs_Type2 = db.IntField(default=0)
    Plugs_Three_Phase = db.IntField(default=0)
    Plugs_Commando = db.IntField(default=0)
    Plugs_Wall_AU_NZ = db.IntField(default=0)
    Plugs_Caravan_Mains_Socket = db.IntField(default=0)
    Plugs_Other = db.IntField(default=0)
    source = db.StringField(required=True)
    source_date = db.StringField(required=True)

    def to_json(self):
        # Return this object as a JSON object.
        return {
            "name": self.name,
            "address": self.address,
            "longitude": self.longitude,
            "latitude": self.latitude,
            "location_category": self.location_category,
            "location_sub_category": self.location_sub_category,
            "description": self.description,
            "open_date": self.open_date,
            "parking": self.parking,
            "pricing": self.pricing,
            "free_use": self.free_use,
            "contact": self.contact,
            "networks": self.networks,
            "total_plugs": self.total_plugs,
            "port_level_type": self.port_level_type,
            "renewable_power_supply": self.renewable_power_supply,
            "power_outputs_kw": self.power_outputs_kw,
            "Plugs_CHAdeMO": self.Plugs_CHAdeMO,
            "Plugs_Tesla": self.Plugs_Tesla,
            "Plugs_CCS_SAE": self.Plugs_CCS_SAE,
            "Plugs_J1772": self.Plugs_J1772,
            "Plugs_Type2": self.Plugs_Type2,
            "Plugs_Three_Phase": self.Plugs_Three_Phase,
            "Plugs_Commando": self.Plugs_Commando,
            "Plugs_Wall_AU_NZ": self.Plugs_Wall_AU_NZ,
            "Plugs_Caravan_Mains_Socket": self.Plugs_Caravan_Mains_Socket,
            "Plugs_Other": self.Plugs_Other,
            "source": self.source,
            "source_date": self.source_date
        }