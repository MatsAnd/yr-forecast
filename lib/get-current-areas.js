const axios = require('axios')
const parser = require('fast-xml-parser')
const isInsidePolygon = require('./is-inside-polygon')
const repackCurrentArea = require('./repack-current-area')
const config = require('../config')

module.exports = async (lat, lon, url = config.YR_TEXT_FORECAST_URL) => {
  const areasResult = await axios.get(`${url}/areas?type=land`)
  const areas = parser.parse(areasResult.data, { ignoreAttributes: false }).areas.area

  const currentAreas = areas.filter(area => isInsidePolygon(lat, lon, area.polygon))
  return currentAreas.map(repackCurrentArea)
}
