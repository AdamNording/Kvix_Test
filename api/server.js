/**
 * The server can in this instance only take a get request and send back
 * an answear. It is listening to port 5000. The server holds on the json-file
 * and on client.
 * @requires JSON-file
 * @requires express
 * @author Adam Nording
 * @date 10/12/2020
 */

var programs = require('./programs.json');
const express = require('express');
const path = require('path');
const app = express();

app.listen(5000, () => console.log("listening at 5000"));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.send(path.join(__dirname, '../client/build'));
});
app.get('/programs', (req, res) => {
    res.send(programs);
});