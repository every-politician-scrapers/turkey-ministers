module.exports = (id, startdate, enddate) => {
  qualifier = { }
  if(startdate) qualifier['P580'] = startdate
  if(enddate)   qualifier['P582'] = enddate

  return {
    id,
    claims: {
      P39: {
        value: 'Q20988365',
        qualifiers: qualifier,
        references: { P4656: 'https://tr.wikipedia.org/wiki/Ankara_valileri_listesi' }
      }
    }
  }
}
