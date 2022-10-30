const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const listingsRoutes = require('./routes/listingsRoute');

app.use('/listings', listingsRoutes);

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});