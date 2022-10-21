const { Router } = require('express');
const { Dog } = require('../db');
const { getAllData } = require('../controllers/dogsController');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    const allData = await getAllData();
    try {
        if(!name) {
            res.send(allData);
        }
        else {
            let filteredData = allData.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
            res.send(filteredData);
        }
        
    } catch (error) {
        res.status(404).send(error.message);
    } 
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const allData = await getAllData();
    try {
        let filteredData = allData.filter(e => e.id == id)[0];
        res.send(filteredData);
        
    } catch (error) {
        res.status(404).send(error.message);
    } 
});

router.post('/', async (req, res) => {
    const { name, height, weight, temperamentId } = req.body; 
    try {
        if(!name || !height || !weight) {
            res.status(404).send('Falta enviar datos obligatorios');
        }
        else {
            const newDog = await Dog.create(req.body);
            await newDog.addTemperaments(temperamentId)
            res.send(newDog);
        }
        
    } catch (error) {
        res.status(404).send("Error en alguno de los datos provistos");
    }
})

module.exports = router;