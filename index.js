const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeamAllYear = require("./ipl/matchesWonByEachTeamAllYear");
const extraRunConcededEachTeam2016 = require("./ipl/extraRunConcededEachTeam2016");
const top10EconomicalBowler2015 = require("./ipl/top10EconomicalBowler2015");
const myStoryMatchesPlayedEachYearPerVenue = require("./ipl/myStoryMatchesPlayedEachYearPerVenue");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
            csv()
                .fromFile(DELIVERIES_FILE_PATH)
                .then(deliveries => {
                let result_3 = extraRunConcededEachTeam2016(matches,deliveries);
                let result_4 = top10EconomicalBowler2015(matches,deliveries);
                let result_5 = myStoryMatchesPlayedEachYearPerVenue(matches);
                //console.log(deliveries.slice(577,636))
        let result_1 = matchesPlayedPerYear(matches);
        let result_2 = matchesWonByEachTeamAllYear(matches);
        saveMatchesPlayedPerYear(result_1,result_2,result_3,result_4,result_5);
        });
    });
}

function saveMatchesPlayedPerYear(result_1, result_2, result_3,result_4,result_5) {
  const jsonData = {
    matchesPlayedPerYear: result_1,
    matchesWonByEachTeamAllYear: result_2,
    extraRunConcededEachTeam2016: result_3,
    top10EconomicalBowler2015:result_4,
    myStoryMatchesPlayedEachYearPerVenue:result_5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
main();
