const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const { urlencoded } = require('express');

app.use(cors());

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllProducts = require('./server/routes/product.routes');

AllProducts(app);

app.listen(port, () => {console.log(`Listening on port: ${port}`)} );