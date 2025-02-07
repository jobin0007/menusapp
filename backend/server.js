
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');
const cookie = require('cookie-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5004;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("ERROR: MONGO_URI is missing in environment variables");
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 50000, 
            socketTimeoutMS: 60000, 
        });
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); 
    }
};

connectDB();

const corsOptions = {
    origin: process.env.FRONTENDAPI || 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookie());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});



app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
