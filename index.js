const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

const listingsRoutes = require('./routes/listingsRoute');
const sellersRoutes = require('./routes/sellersRoute');
const commentsRoutes = require('./routes/commentsRoute');

app.use(express.json());
app.use(cors());

app.use('/listings', listingsRoutes);
app.use('/sellers', sellersRoutes);
app.use('/comments', commentsRoutes);

app.use('/login', (req, res) => {
    res.send({
      token: 'testingtesting123'
    });
  });

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});