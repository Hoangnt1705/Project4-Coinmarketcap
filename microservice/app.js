const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');
const cors = require('cors');
const port = 3191;
app.use(morgan('combined'));
app.use(cors());
app.get('/api/coin/details/:id', (req, res) => {
    let { id } = req.params;
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(response => {
            let { data } = response;
            console.log(data);
            res.status(200).json(data);
        })
});
app.listen(port, () => {
    console.log(" listening on port: http://localhost:" + port);
})

