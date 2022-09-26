
# Define constants
MONGO_USER = 'evchargerforecasting'
MONGO_PASSWORD = 'ECFLO1234'
DATABASE_NAME = 'evproject'

# Old database URI:
#DB_URI = 'mongodb+srv://{}:{}@cluster0.uoau0.mongodb.net/{}?retryWrites=true&w=majority'.format(MONGO_USER, MONGO_PASSWORD, DATABASE_NAME)
#DB_URI = 'mongodb+srv://{}:{}@{}.sdaqas5.mongodb.net/?retryWrites=true&w=majority'.format(MONGO_USER, MONGO_PASSWORD, DATABASE_NAME)

# New database URI (Use this!):
DB_URI = 'mongodb+srv://{}:{}@cluster0.md7fh7i.mongodb.net/?retryWrites=true&w=majority'.format(MONGO_USER, MONGO_PASSWORD)

# Data file paths
CSV_FILEPATH = 'A:\\Deakin\\2022 - T2\\SIT378 - Team Project (B) - Execution and Delivery\\Chameleon\\EV Project\\Git Repo\\csv_to_database\\csv_to_db\\master data.csv'
BOUND_CSV_FILEPATH = 'A:\\Deakin\\2022 - T2\\SIT378 - Team Project (B) - Execution and Delivery\\Chameleon\\EV Project\\Git Repo\\csv_to_database\\csv_to_db\\bounds_coordinates.csv'
SUGGESTED_CSV_FILEPATH = 'A:\\Deakin\\2022 - T2\\SIT378 - Team Project (B) - Execution and Delivery\\Chameleon\\EV Project\\Git Repo\\csv_to_database\\csv_to_db\\suggestions_coordinates.csv'
