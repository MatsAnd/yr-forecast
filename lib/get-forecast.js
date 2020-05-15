const axios = require('axios')
const repackForecast = require('./repack-forecast')
const config = require('../config')

module.exports = async (lat, lon, url = config.YR_FORECAST_URL) => {
  const { data } = await axios.get(url, {
    params: {
      lat,
      lon
    }
  })

  const forecast = data.properties.timeseries
  return forecast.map(repackForecast)
}
