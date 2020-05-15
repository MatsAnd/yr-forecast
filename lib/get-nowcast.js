const axios = require('axios')
const repackNowcast = require('./repack-nowcast')
const config = require('../config')

module.exports = async (lat, lon, url = config.YR_NOWCAST_URL) => {
  const { data } = await axios.get(url, {
    params: {
      lat,
      lon
    }
  })

  const nowcast = data.product.time
  return nowcast.map(repackNowcast)
}
