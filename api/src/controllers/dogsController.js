const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;

async function getApiData() {
    let apiData = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data
    .map(e => ({
        id: e.id,
        name: e.name,
        height: e.height.metric,
        weight: e.weight.metric,
        life_span: e.life_span,
        image: e.image.url,
        temperament: e.temperament
    }));

    return apiData;
};

async function getDbData() {
    let dbDogs = await Dog.findAll({
        include: [{
            model: Temperament,
            attributes: ["name"],
            through: { attributes:[] }
        }]
    });
        
    let dbData = dbDogs.map(e => {
        return {
            id: e.id,
            name: e.name,
            height: e.height,
            weight: e.weight,
            life_span: e.life_span,
            image: e.image,
            temperament: e.temperaments.map(e => e.name).toString()
        }
    })
    return dbData;
};

async function getAllData() {
    let apiData = await getApiData();
    let dbData = await getDbData();

    let allData = apiData.concat(dbData);
    return allData;
}

module.exports = { getApiData, getDbData, getAllData };