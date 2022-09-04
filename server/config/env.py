
# Define constants
MONGO_USER = 'testuser'
MONGO_PASSWORD = 'P4ssw0rd'
DATABASE_NAME = 'EVProject'

DB_URI = 'mongodb+srv://{}:{}@cluster0.uoau0.mongodb.net/{}?retryWrites=true&w=majority'.format(MONGO_USER, MONGO_PASSWORD, DATABASE_NAME)