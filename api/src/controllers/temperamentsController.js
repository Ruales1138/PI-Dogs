const axios = require('axios');
const { Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;

async function temperamentsData() {
    try {
        let temps = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data
        .map((d) => d.temperament).join().split(",").sort();

        let withoutSpace = temps.map(e => e.trim());

        let filteredTemps = [...new Set(withoutSpace)];

        filteredTemps.map((e) => {
            if(e !== '') {
                Temperament.findOrCreate({
                    where: {
                        name: e
                    }
                })
            }
        })

    } catch (error) {
        console.log('Erro temperaments')
    }
};

module.exports = { temperamentsData };