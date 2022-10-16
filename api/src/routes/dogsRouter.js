const { Router } = require('express');
const { dogsData } = require('../controllers/dogsController')

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        
    } catch (error) {
        res.status(404).send('error')
    }
});

module.exports = router;