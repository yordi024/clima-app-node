const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=dd7db8f59c584bde6772925bb2652b3c`)
    if (resp.data.cod !== 200) {
        throw new Error('Ciudad no encontrada');
    }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}