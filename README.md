
# Weather Information Service

## Description

This is a simple Node.js-based web service that fetches and displays weather information based on user input (city or location). The application uses the Weatherstack API to retrieve current weather data and displays it in a user-friendly format.

## Features

- Fetches real-time weather information for a specified city or location.
- Displays data including temperature, weather description, wind speed, and humidity.
- Provides a simple RESTful API endpoint to get weather information.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Axios**: Promise-based HTTP client for making API requests.
- **Weatherstack API**: External API for retrieving weather data.
- **dotenv**: Module to load environment variables from a `.env` file.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-info-service.git
   cd weather-info-service
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
3. **Run the server**:
   ```bash
   node index.js
   ```

5. **Access the service**:
   - Open your browser and go to `http://localhost:3000/weather?city=London` to see the weather information for London.
   - Replace `London` with any city name to get the weather for that location.

## API Endpoints

- `GET /weather?city=<city_name>`: Fetches the weather information for the specified city.

  Example:
  ```
  GET http://localhost:3000/weather?city=New York
  ```

  Response:
  ```json
  {
      "location": "New York",
      "temperature": 22,
      "description": "Partly cloudy",
      "wind_speed": 13,
      "humidity": 65
  }
  ```

## Notes

- Ensure you have a valid API key from Weatherstack to use this service.
- The service runs on port `3000` by default. You can change this by setting the `PORT` environment variable.

## License

This project is open-source.

## Acknowledgements

- [Weatherstack](https://weatherstack.com/) for providing the weather data.
