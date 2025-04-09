import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cortex';

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

// Define mongoose connection interface
interface MongooseConnection {
  isConnected?: number;
}

// Define the global mongoose cache interface
interface GlobalMongoose {
  mongoose?: typeof mongoose;
  conn?: MongooseConnection;
}

// Add mongoose to the NodeJS global type
declare global {
  // eslint-disable-next-line no-var
  var mongooseGlobal: GlobalMongoose;
}

// Initialize the global mongoose object if it doesn't exist
if (!global.mongooseGlobal) {
  global.mongooseGlobal = {};
}

/**
 * Connect to MongoDB database
 */
async function connectToDatabase() {
  // If we have a connection already, use it
  if (global.mongooseGlobal.mongoose) {
    return global.mongooseGlobal.mongoose;
  }

  // Connect to the database
  try {
    const connection = await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

    // Store the connection for reuse
    global.mongooseGlobal.mongoose = connection;
    global.mongooseGlobal.conn = { isConnected: 1 };

    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default connectToDatabase;
