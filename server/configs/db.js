import "dotenv/config";
import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () =>
            console.log("Database Connected")
        );

        await mongoose.connect(
            `${process.env.MONGODB_URI}/car-rental`
        );

    } catch (error) {
        console.log("MongoDB Error:", error.message);
    }
};

export default connectDB;