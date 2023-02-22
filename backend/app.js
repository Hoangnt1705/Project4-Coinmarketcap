/* Example in Node.js */
const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');
const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
    }
});
const port = process.env.PORT || 3190;
const API_KEY = '6e341607-5728-40eb-a24b-a0c789a9b683';
const cors = require('cors');
let requests = 0;
const MAX_REQUESTS_PER_SECOND = 1;
app.use(morgan('combined'));
app.use(cors());
io.on('connection', (socket) => {
    console.log('Client connected');
    function sendRequest() {
        if (requests < MAX_REQUESTS_PER_SECOND) {
            axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': API_KEY,
                },
            })
                .then(response => {
                    let { data } = response.data;
                    socket.emit('global-metrics-quotes', data);

                })
                .catch(err => console.log(err));
            ///
            axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': API_KEY,
                },
            })
                .then(response => {
                    let { data } = response.data;
                    console.log(data);
                    socket.emit('cryptocurrency-listings', data);

                })
                .catch(err => console.log(err));
            axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories', {
                headers: {
                    'X-CMC_PRO_API_KEY': API_KEY,
                },
            })
                .then(response => {
                    let { data } = response;
                    socket.emit('cryptocurrency-categories', data);

                })
                .catch(err => console.log(err));
            requests++;
        } else {
            setTimeout(() => {
                axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
                    headers: {
                        'X-CMC_PRO_API_KEY': API_KEY,
                    },
                })
                    .then(response => {
                        let { data } = response.data;
                        socket.emit('global-metrics-quotes', data);

                    })
                    .catch(err => console.log(err));
                ///
                axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                    headers: {
                        'X-CMC_PRO_API_KEY': API_KEY,
                    },
                })
                    .then(response => {
                        let { data } = response.data;
                        socket.emit('cryptocurrency-listings', data);

                    })
                    .catch(err => console.log(err));
                console.log("aaaa");
            }, 2000000);
        }
    }
    sendRequest();
    setInterval(sendRequest, 20000000);


});

http.listen(port, () => {
    console.log(" listening on port: http://localhost:" + port);
})

