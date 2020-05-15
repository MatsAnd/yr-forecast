(async () => {
  const yr = require('./index')
  const lat = 59.2667259
  const lon = 10.4045301

  const forecast = await yr.getForecast(lat, lon)
  console.log(JSON.stringify(forecast, null, 2))

  const nowcast = await yr.getNowcast(lat, lon)
  console.log(JSON.stringify(nowcast, null, 2))

  const textForecast = await yr.getTextForecast(lat, lon)
  console.log(JSON.stringify(textForecast, null, 2))
})()
