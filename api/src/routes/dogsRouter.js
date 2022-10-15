const { Router } = require('express');
const { dogsData } = require('../controllers/dogsController')

const router = Router();

router.get('/', dogsData);

module.exports = router;