const axios = require('axios')
const parser = require('fast-xml-parser')
const repackTextForecast = require('./repack-text-forecast')
const getCurrentAreas = require('./get-current-areas')
const config = require('../config')

const getCurrentAreaIds = async (lat, lon) => {
  return (await getCurrentAreas(lat, lon)).map(area => area.id)
}

module.exports = async (lat = null, lon = null, url = config.YR_TEXT_FORECAST_URL) => {
  const textForecastResult = await axios.get(`${url}/landoverview`)
  const textForecast = parser.parse(textForecastResult.data, { ignoreAttributes: false })

  const currentAreaIds = lat && lon ? await getCurrentAreaIds(lat, lon) : null
  return repackTextForecast(textForecast, currentAreaIds)
}
