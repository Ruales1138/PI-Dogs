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
})

module.exports = router;