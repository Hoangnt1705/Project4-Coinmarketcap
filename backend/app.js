/* Example in Node.js */
const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');
const http = require('http').createServer();
const io = require('socket.io')(http);
const port = process.env.PORT || 3190;
const API_KEY = '6e341607-5728-40eb-a24b-a0c789a9b683';
let requests = 0;
const MAX_REQUESTS_PER_SECOND = 1;
app.use(morgan('combined'));
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
                    console.log(response.data);
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
                    console.log(response.data);
                    let { data } = response.data;
                    socket.emit('cryptocurrency-listings', data);

                })
                .catch(err => console.log(err));
            requests++;
            console.log(requests);
        } else {
            setTimeout(() => {
                axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
                    headers: {
                        'X-CMC_PRO_API_KEY': API_KEY,
                    },
                })
                    .then(response => {
                        console.log(response.data);
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
                        console.log(response.data);
                        let { data } = response.data;
                        socket.emit('cryptocurrency-listings', data);

                    })
                    .catch(err => console.log(err));
                console.log("aaaa");
            }, 2000);
        }
    }
    sendRequest();
    setInterval(sendRequest, 500000);


});

http.listen(port, () => {
    console.log(" listening on port: http://localhost:" + port);
})

