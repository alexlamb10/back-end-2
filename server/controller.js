const houses = require('./db.json');
const hosueID = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(house => +house.id === +req.params.id);

        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {

    },
    updateHouse: (req, res) => {

    },
}