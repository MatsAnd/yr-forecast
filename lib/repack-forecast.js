module.exports = ({ time, data }) => {
  return {
    from: new Date(time),
    instant: data.instant.details,

    next_1_hours: data.next_1_hours ? {
      ...data.next_1_hours.summary,
      ...data.next_1_hours.details
    } : null,

    next_6_hours: data.next_6_hours ? {
      ...data.next_6_hours.summary,
      ...data.next_6_hours.details
    } : null
  }
}
