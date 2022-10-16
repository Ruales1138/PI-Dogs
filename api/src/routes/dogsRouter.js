const { Router } = require('express');
const { Dog } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        if(!name) {
            const allDogs = await Dog.findAll();
            res.send(allDogs);
        } 
        else {
            const aux = {};
            aux.name = name;
            const filterDog = await Dog.findAll({ where: aux });
            res.send(filterDog)
        }
        
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const aux = {};
        aux.id = id;
        const filterDog = await Dog.findAll({ where: aux });
        res.send(filterDog)
        
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/', async (req, res) => {
    const { name, height, weight } = req.body; 
    try {
        if(!name || !height || !weight) {
            res.status(404).send('Falta enviar datos obligatorios');
        }
        else {
            const newDog = await Dog.create(req.body);
            res.send(newDog);
        }
        
    } catch (error) {
        res.status(404).send("Error en alguno de los datos provistos");
    }
})

module.exports = router;