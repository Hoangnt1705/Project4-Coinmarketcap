/* Example in Node.js */
const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/', (req, res) => {
    /* Example in Node.js */
    let response = null;
    new Promise(async (resolve, reject) => {
        try {
            response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': '6e341607-5728-40eb-a24b-a0c789a9b683',
                },
            });
        } catch (ex) {
            response = null;
            // error
            console.log(ex);
            reject(ex);
        }
        if (response) {
            // success
            const json = response.data;
            res.send(json)
            resolve(json);
        }
    });

})

app.listen(port, () => {
    console.log(" listening on port: http://localhost:" + port);
})
