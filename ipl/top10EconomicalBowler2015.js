function top10EconomicalBowler2015(matches,deliveries)
{
    //deliveries = deliveries[519]
    //matches = matches.slice(515,518);
    let idArray = [];
    let result = {};
    for(let match of matches)
    {
        if(match.season == 2015)
        idArray.push(match.id)
    }
    //console.log(idArray); 
    for(let data of deliveries)
    {
        if(data.match_id >= idArray[0] && data.match_id <= idArray[idArray.length-1])
        {
            if(!(data.bowler in result))
            {
                let newObj = {};
                if(data.ball <= 6)
                newObj.ballCount = 1;
                newObj.sum_total_runs = parseInt(data.total_runs);
                result[data.bowler] = newObj;
            }
            else{
                if(data.ball <= 6)
                result[data.bowler].ballCount++;
                result[data.bowler].sum_total_runs += parseInt(data.total_runs);
               
            }
        }    
    }

    for(let bowlerName in result)
    {
        let value = result[bowlerName];
        result[bowlerName] = (value.sum_total_runs) / (value.ballCount/6); 
    }
   // console.log(result);

    let arr = Object.entries(result);
    arr.sort((a,b)=> a[1]-b[1]);
    arr = arr.slice(0,10);
    let Final_result = {};
    for(let i = 0 ; i < arr.length ; i++)
    Final_result[arr[i][0]] = arr[i][1] ;

    //console.log(Final_result);
    return Final_result;
}
module.exports = top10EconomicalBowler2015;