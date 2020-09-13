function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}
fetchAndVisualizeData();
function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByEachTeamAllYear(data.matchesWonByEachTeamAllYear);
  visualizeExtraRunConcededEachTeam2016(data.extraRunConcededEachTeam2016);
  visualizeTop10EconomicalBowler2015(data.top10EconomicalBowler2015);
  visualizemyStoryMatchesPlayedEachYearPerVenue(data.myStoryMatchesPlayedEachYearPerVenue);
  return;
}
function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
//console.log(seriesData);
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1.Total numbers of matches played per year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}
function visualizeMatchesWonByEachTeamAllYear(matchesWonByEachTeamAllYear){
  //console.log(Object.keys(matchesWonByEachTeamAllYear['Kings XI Punjab']));
  const seriesData1 = [];
  for(let team in matchesWonByEachTeamAllYear)
  {
  // console.log(Object.values(matchesWonByEachTeamAllYear[team]));
  seriesData1.push({name :team, data :Object.values(matchesWonByEachTeamAllYear[team])})
  }
  //console.log(seriesData1);
  Highcharts.chart('matches-won-by-each-team-all-year', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2. Number of matches won by each team over all the years of IPL'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories: Object.keys(matchesWonByEachTeamAllYear['Kings XI Punjab']),
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesData1,
});
}
function visualizeExtraRunConcededEachTeam2016(extraRunConcededEachTeam2016) {
  const seriesData2 = [];
  for (let team in extraRunConcededEachTeam2016) {
    seriesData2.push([team, extraRunConcededEachTeam2016[team]]);
  }
//console.log(seriesData);
  Highcharts.chart("extra-run-conceded-eachTeam-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra runs conceded by each team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData2
      }
    ]
  });
}
function visualizeTop10EconomicalBowler2015(top10EconomicalBowler2015){
  const seriesData_3 = [];
  for (let bowlerName in top10EconomicalBowler2015) {
    seriesData_3.push([bowlerName, top10EconomicalBowler2015[bowlerName]]);
  }
//console.log(seriesData);
  Highcharts.chart("top10-economical-bowler-2015", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top Economical Bowlers in 2015 season"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowlers Name",
        data: seriesData_3
      }
    ]
  });
}
function visualizemyStoryMatchesPlayedEachYearPerVenue(myStoryMatchesPlayedEachYearPerVenue){
  //console.log(Object.keys(myStoryMatchesPlayedEachYearPerVenue[2008]));
  const seriesData_4 = [];
  for(let year in myStoryMatchesPlayedEachYearPerVenue)
  {
  //console.log(year +"--"+ Object.values(myStoryMatchesPlayedEachYearPerVenue[year]));
  seriesData_4.push({name :year, data :Object.values(myStoryMatchesPlayedEachYearPerVenue[year])})
  }
  Highcharts.chart('myStory-matches-played-each-year-per-venue', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5. Story: Matches Played each year per Venue'
    },
    xAxis: {
        categories: Object.keys(myStoryMatchesPlayedEachYearPerVenue[2008])
    },
    yAxis: {
        min: 0,
        title: {
            text: ' Matches played each year vs stadium'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: seriesData_4
});
}







