/* Example in Node.js */
const express = require('express');
const app = express();
const port = `3400`;
const axios = require('axios');
const morgan = require('morgan');
const http = require('http').createServer();
const io = require('socket.io')(http);
app.use(morgan());



app.get('/', (req, res) => {
    /* Example in Node.js */
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': '6e341607-5728-40eb-a24b-a0c789a9b683',
        },
    })
        .then(response => {
            console.log(response.data);
            let { data } = response.data;
            res.send(data);

        })
        .catch(err => console.log(err));
})

app.get('/api', (req, res) => {
    /* Example in Node.js */
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': '6e341607-5728-40eb-a24b-a0c789a9b683',
        },
    })
        .then(response => {
            console.log(response.data);
            let { data } = response.data;
            res.send(data);

        })
        .catch(err => console.log(err));
})

// io.on('connection', socket => {
//     axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//         headers: {
//             'X-CMC_PRO_API_KEY': '6e341607-5728-40eb-a24b-a0c789a9b683',
//         },
//     })
//         .then(response => {
//             console.log(response.data);
//             let { data } = response.data;

//             // Emit the data to the client using socket.io
//             socket.emit('data', data);
//         })
//         .catch(err => console.log(err));
// });

app.listen(port, () => {
    console.log(" listening on port: http://localhost:" + port);
})


// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// app.get('/', (req, res) => {
//     res.send('<h1>Hello world</h1>');
// });

// server.listen(3400, () => {
//     console.log('listening on http://localhost:3400');
// });