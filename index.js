const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Weather Information Service');
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'Please provide a city' });
    }

    try {
        const apiKey = process.env.WEATHERSTACK_API_KEY;
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);

        if (response.data.error) {
            return res.status(400).json({ error: 'Unable to fetch weather data' });
        }

        const weatherData = {
            location: response.data.location.name,
            temperature: response.data.current.temperature,
            description: response.data.current.weather_descriptions[0],
            wind_speed: response.data.current.wind_speed,
            humidity: response.data.current.humidity,
        };

        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
