
# Define constants
MONGO_USER = 'testuser'
MONGO_PASSWORD = 'P4ssw0rd'
DATABASE_NAME = 'EVProject'

DB_URI = 'mongodb+srv://{}:{}@cluster0.uoau0.mongodb.net/{}?retryWrites=true&w=majority'.format(MONGO_USER, MONGO_PASSWORD, DATABASE_NAME)


CSV_FILEPATH = 'A:\\Deakin\\2022 - T1\\SIT374 - Team Project A\\Chameleon\\EV Project\\Website\\csv_to_database\\csv_to_db\\upload.csv'