# WIP This class defines the suggestedStation model

from flask_mongoengine import MongoEngine

db = MongoEngine()

class SuggestedStation(db.Document):
    longitude = db.FloatField(required=True)
    latitude = db.FloatField(required=True)
    total_plugs = db.IntField(required=True)
    suitability_score = db.FloatField(required=True)

    def to_json(self):
        # Return this object as a JSON object.
        return {
            "longitude":self.longitude,
            "latitude":self.latitude,
            "total_plugs":self.total_plugs,
            "suitability_score":self.suitability_score
        }