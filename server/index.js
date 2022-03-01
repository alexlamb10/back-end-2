const express = require('express');
const cors = require('cors');
const app = express();
const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller')
const SERVER_PORT = 5050;

app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))