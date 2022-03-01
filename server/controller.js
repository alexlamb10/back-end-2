const houses = require('./db.json');
const hosueID = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {

    },
    createHouse: (req, res) => {

    },
    updateHouse: (req, res) => {

    },
}