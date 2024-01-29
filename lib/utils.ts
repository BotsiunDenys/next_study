import mongoose from "mongoose";

interface ConnectionType {
  isConnected: mongoose.ConnectionStates;
}

const connection: ConnectionType = {
  isConnected: 0,
};

export const connectToDb = async () => {
  try {
    const mongoUri = process.env.MONGO;

    if (!mongoUri) {
      throw new Error(
        "MongoDB connection string not provided in the environment variable"
      );
    }

    if (connection.isConnected) {
      console.log("Connection to DB exists");
      return;
    }

    const db = await mongoose.connect(mongoUri);
    connection.isConnected = db.connections[0].readyState;
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
