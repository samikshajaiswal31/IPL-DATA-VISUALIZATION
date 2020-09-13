/*function matchesPlayedPerYear(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.season;
      if (result[season]) {
        result[season] += 1;
      } else {
        result[season] = 1;
      }
    }
    return result;
  }*/
function matchesPlayedPerYear(matches)
{
    const result = {};
    for(let match of matches)
    {
        if(match.season in result == false)
        {
            result[match.season] = 1;
        }
        else
        {
            result[match.season]++;
        }
        //console.log(match.season);
        //console.log(matches[match]);
    }
    return result;
}
module.exports = matchesPlayedPerYear;
