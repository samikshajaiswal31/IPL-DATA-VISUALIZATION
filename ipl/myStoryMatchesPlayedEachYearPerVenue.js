//My Story : Plot the total number of matches played each year per venue. 
function myStoryMatchesPlayedEachYearPerVenue(matches)
{
    let result = {};
    let venueObj = {};
    for(let match of matches)
    {
        if(!(match.venue in venueObj))
        venueObj[match.venue] = 0; 
    }
    //console.log(venueObj);
    for(let match of matches)
    {
        if(!(match.season in result))
        {
           let stadium = match.venue;
           const newObj = {...venueObj};
           newObj[stadium] = 1;
           result[match.season] = newObj;
        }
        else
        {
            if(!(match.venue in result[match.season]))
            {
                result[match.season][match.venue] = 1;
            }
            else{
                result[match.season][match.venue]++;
            }
        }  
    }
    //console.log(result);
    return result;
}
module.exports = myStoryMatchesPlayedEachYearPerVenue;