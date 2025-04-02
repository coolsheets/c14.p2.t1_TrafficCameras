const mongoose = require("mongoose");
const User = require("./models/User"); // Import schema

mongoose.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
    .catch(err => console.error("Connection error:", err));

// Example: Create a new user
const newUser = new User({ name: "John Doe", email: "john@example.com" });

newUser.save()
    .then(() => console.log("User saved"))
    .catch(err => console.error(err));

async function getUsers() {
    try {
        const users = await User.find(); // Fetch all users
        console.log(users);
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
}

getUsers();
