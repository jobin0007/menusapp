
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');
const cookie = require('cookie-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected successfully");
    } catch (error) {
        console.error("DB connection error:", error);
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


const PORT = process.env.PORT || 5004;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
