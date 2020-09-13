function extraRunConcededEachTeam2016(matches,deliveries)
{   //matches = matches.slice(575,577);
    let idArray = [];
    const result = {};
    for(let match of matches)
    {
        if(match.season == 2016)
        idArray.push(match.id)
    }
    for(let data of deliveries)
    {
        if(data.match_id >= idArray[0] && data.match_id <= idArray[idArray.length-1])
        {
            let run = parseInt(data.extra_runs);
            if(!(data.bowling_team in result))
            {
                result[data.bowling_team] = run;
            }
            else{
                result[data.bowling_team] += run;
            }
        }
        
    }
    //console.log(result);
    return result;
}
module.exports = extraRunConcededEachTeam2016;