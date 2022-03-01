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

        if(!req.body.address || !req.body.price || !req.body.imageURL){
            res.status(400).send(`Must enter each box`)
        }else{
            let newHouse = req.body;
            newHouse.id = houseID;
     
            houses.push(newHouse)
            res.status(200).send(houses)
            houseID += 1;
        }
        
    },
    updateHouse: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;

        let index = houses.findIndex(house => +house.id === +id);
        
        if(houses[index].price < 10000 && type === 'minus') {
            res.status(400).send(`Price cannot go below 0`)
        }else if(type === 'minus'){
            houses[index].price -= 10000;
            res.status(200).send(houses);
        } else if(type === 'plus'){
            houses[index].price += 10000;
            res.status(200).send(houses);
        }else{
            res.sendStatus(400)
        }

    },
}