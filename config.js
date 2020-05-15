module.exports = {
  YR_TEXT_FORECAST_URL: process.env.YR_AREA_URL || 'https://api.met.no/weatherapi/textforecast/2.0',
  YR_FORECAST_URL: process.env.YR_FORECAST_URL || 'https://api.met.no/weatherapi/locationforecast/2.0/.json',
  YR_NOWCAST_URL: process.env.YR_NOW_URL || 'https://api.met.no/weatherapi/nowcast/0.9/.json'
}
