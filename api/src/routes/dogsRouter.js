const { Router } = require('express');
const { dogsData } = require('../controllers/dogsController')

const router = Router();

// router.get('/', dogsData);

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        const allDogs = await dogsData();
        if(!name) {
            res.status(200).send(allDogs);
        }
        
    } catch (error) {
        res.status(404).send('error')
    }
});

module.exports = router;