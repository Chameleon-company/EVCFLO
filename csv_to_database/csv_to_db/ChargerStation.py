# This class defines the chargerstation model

from flask_mongoengine import MongoEngine

db = MongoEngine()

# Define class for a chargerstation..
class ChargerStation(db.Document):
    name = db.StringField(required=True)
    address = db.StringField(default='not specified')
    description = db.StringField(default='none entered')
    location_category = db.StringField(default='not specified')
    location_sub_category = db.StringField(default='not specified')
    open_date = db.StringField(default='unknown')
    pricing = db.StringField(default='unknown')
    free_use = db.StringField(default='not specified')
    latitude = db.FloatField(required=True)
    longitude = db.FloatField(required=True)
    port_count = db.IntField(default=0)
    port_level_type = db.StringField(default='not specified')
    network = db.StringField(default='unknown')
    manufacturer = db.StringField(default='unknown')
    power_output_kw = db.FloatField(default=0.0)
    power_output_volts = db.FloatField(default=0.0)
    power_output_amps = db.FloatField(default=0.0)
    renewable_power_supply = db.StringField(default='not specified')
    CHAdeMO = db.IntField(default=0)
    Tesla_std = db.IntField(default=0)
    Tesla_Fast = db.IntField(default=0)
    Tesla_Roadster = db.IntField(default=0)
    CCS_SAE = db.IntField(default=0)
    J1772 = db.IntField(default=0)
    Type2 = db.IntField(default=0)
    Commando = db.IntField(default=0)
    Wall_AU = db.IntField(default=0)

    def to_json(self):
        # Return this object as a JSON object.
        return {
            "name": self.name,
            "address": self.address,
            "description": self.description,
            "location_category": self.location_category,
            "location_sub_category": self.location_sub_category,
            "open_date": self.open_date,
            "pricing": self.pricing,
            "free_use": self.free_use,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "port_count": self.port_count,
            "port_level_type": self.port_level_type,
            "network": self.network,
            "manufacturer": self.manufacturer,
            "power_output_kw": self.power_output_kw,
            "power_output_volts": self.power_output_volts,
            "power_output_amps": self.power_output_amps,
            "renewable_power_supply": self.renewable_power_supply,
            "CHAdeMO": self.CHAdeMO,
            "Tesla_std": self.Tesla_std,
            "Tesla_Fast": self.Tesla_Fast,
            "Tesla_Roadster": self.Tesla_Roadster,
            "CCS_SAE": self.CCS_SAE,
            "J1772": self.J1772,
            "Type2": self.Type2,
            "Commando": self.Commando,
            "Wall_AU": self.Wall_AU
        }