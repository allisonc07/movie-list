const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/movies', (req, res) => {

})

app.post('/movies', (req, res) => {

})

app.listen(3000, () => console.log('Listening on port 3000'));