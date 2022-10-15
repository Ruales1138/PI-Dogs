const axios = require('axios');
const Dog = require('../db');
const { YOUR_API_KEY } = process.env;

async function dogsData(req, res) {
    try {
        let dogs = (await axios('https://api.thedogapi.com/v1/breeds')).data
        res.send(dogs)
    } catch (error) {
        res.status(404).send('Error')
    }
}

module.exports = {dogsData};