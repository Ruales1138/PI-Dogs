const { Router } = require('express');
const { Temperament } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);
})

module.exports = router;