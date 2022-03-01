const houses = require('./db.json');
let houseID = 4;

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
       let newHouse = req.body;
       newHouse.id = houseID;

       houses.push(newHouse)
       res.status(200).send(houses)
       houseID += 1;
        
    },
    updateHouse: (req, res) => {

    },
}