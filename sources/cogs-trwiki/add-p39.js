module.exports = (id, startdate, enddate) => {
  qualifier = { }
  if(startdate) qualifier['P580'] = startdate
  if(enddate)   qualifier['P582'] = enddate

  return {
    id,
    claims: {
      P39: {
        value: 'Q106532278',
        qualifiers: qualifier,
        references: { P4656: 'https://tr.wikipedia.org/wiki/T%C3%BCrkiye_hazine_ve_maliye_bakanlar%C4%B1_listesi' }
      }
    }
  }
}
