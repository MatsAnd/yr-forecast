module.exports = (nowcast) => {
  return {
    from: new Date(nowcast.from),
    to: new Date(nowcast.to),
    precipitation: nowcast.location.precipitation
  }
}
