function matchesWonByEachTeamAllYear(matches)
{
    //matches  = matches.slice(50,80);
    const result = {};
    let yearObj = {};
    for(let match of matches)
    {
        if(!(match.season in yearObj))
        yearObj[match.season] = 0; 
    }
    //console.log(yearObj);
    for(let match of matches)
    {
        if(!(match.winner in result))
        {
           let year = match.season;
           const newObj = {...yearObj};
           newObj[year] = 1;
           result[match.winner] = newObj;
        }
        else
        {
            if(!(match.season in result[match.winner]))
            {
                result[match.winner][match.season] = 1;
            }
            else{
                result[match.winner][match.season]++;
            }
        }  
    }
    //console.log(Object.values(result['Kings XI Punjab']))
    //console.log(result);
    return result;
}
module.exports = matchesWonByEachTeamAllYear;

