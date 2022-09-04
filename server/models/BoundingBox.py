# WIP This class defines the boundingBox model

from flask_mongoengine import MongoEngine

db = MongoEngine()

class BoundingBox(db.Document):
    north = db.FloatField(required=True)
    south = db.FloatField(required=True)
    east = db.FloatField(required=True)
    west = db.FloatField(required=True)
    source = db.StringField(required=True)
    source_date = db.StringField(required=True)

    def to_json(self):
        # Return this object as a JSON object.
        return {
            "north":self.north,
            "south":self.south,
            "east":self.east,
            "west":self.west,
            "source":self.source,
            "source_date":self.source_date
        }