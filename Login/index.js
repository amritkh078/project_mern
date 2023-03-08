const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}
);
