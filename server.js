const express = require('express');
const cors = require('cors');
const glob = require('glob');
const path = require('path');
const db = require('./database/models');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const apiList = [];
glob.sync('./routes/**/*.js').forEach(function(file) {
    apiList.push(require(path.resolve(file)));
});

apiList.forEach(d => {
    const h = new d(db, app);
    if (typeof h.setHandler === 'function') {
        h.setHandler();
    }
});
// app.use(express.static('client/build'));
// app.get('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

app.listen(port, () => console.log(`listening on port ${port}!`))
