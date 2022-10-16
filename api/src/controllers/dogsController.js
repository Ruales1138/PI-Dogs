const axios = require('axios');
const { Dog } = require('../db');
const { YOUR_API_KEY } = process.env;

async function dogsData() {
    try {
        let dogs = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data
        .map(e => ({
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            image: e.image.url
        }))
        await Dog.bulkCreate(dogs)
        console.log('Datos agregados')

    } catch (error) {
        console.log('error')
    }
}

module.exports = {dogsData};