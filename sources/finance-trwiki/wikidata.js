module.exports = function () {
  return `SELECT DISTINCT ?item ?itemLabel ?startDate ?endDate
               (STRAFTER(STR(?held), '/statement/') AS ?psid)
        WHERE {
          ?item wdt:P31 wd:Q5 ; p:P39 ?held .
          ?held ps:P39 wd:Q106532278 ; pq:P580 ?start .
          FILTER NOT EXISTS { ?held wikibase:rank wikibase:DeprecatedRank }

          OPTIONAL { ?held pq:P580 ?startDate }
          OPTIONAL { ?held pq:P582 ?endDate }
          FILTER (!BOUND(?startDate) || (?startDate >= "1923-01-01T00:00:00Z"^^xsd:dateTime))

          SERVICE wikibase:label { bd:serviceParam wikibase:language "tr,en" }
        }
        # ${new Date().toISOString()}
        ORDER BY ?startDate ?itemLabel ?psid`
}
