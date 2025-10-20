import express from "express"

import {
    getList, getPlayerById, searchPlayer, getBatsmen, getBowlers, getAllRounders, getWicketKeepers, getCaptain,
     getHighestScorer, getHighestWicketTaker, getBestStrikeRate, getMostCatches, getYoungPlayers, getExperiencedPlayers,
      getTopBatsmen, getTopBowlers, getRandomPlayer, getAverageStrikeRate,getTotalRuns, getTotalWickets,getTeamSummary

} from "./modules.js";

const app = express();

app.get("/", (req, res) => {
    res.send("🏏 Welcome to the Pakistan Cricket Players API! \nAccess player stats, records, and performance data using our endpoints.\nUse /getList to view all players");
});

app.get("/get-players", (req, res) => {
    res.send(getList());
});

app.get("/get-player-by-id", (req, res) => {
    res.send(getPlayerById(3));
});

app.get("/search-player", (req, res) => {
    res.send(searchPlayer("Imad Wasim"));
});

app.get("/batsmen", (req, res) => {
    res.send(getBatsmen());
});

app.get("/bowlers", (req, res) => {
    res.send(getBowlers());
});

app.get("/all-rounders", (req, res) => {
    res.send(getAllRounders());
});

app.get("/wicker-keepers", (req, res) => {
    res.send(getWicketKeepers());
});

app.get("/captain", (req, res) => {
    res.send(getCaptain());
});

app.get("/highest-scorer", (req, res) => {
    res.send(getHighestScorer());
});

app.get("/highest-wicket-taker", (req, res) => {
    res.send(getHighestWicketTaker());
});

app.get("best-strike-rate", (req, res) => {
    res.send(getBestStrikeRate());
});

app.get("/most-catches", (req, res) => {
    res.send(getMostCatches());
});

app.get("/young-players", (req, res) => {
    res.send(getYoungPlayers());
});

app.get("/experienced-players", (req, res) => {
    res.send(getExperiencedPlayers());
});

app.get("/top-batsman", (req, res) => {
    res.send(getTopBatsmen());
});

app.get("/top-bowler", (req, res) => {
    res.send(getTopBowlers());
});

app.get("/random-player", (req, res) => {
    res.send(getRandomPlayer());
});

app.get("/average-strike-rate", (req, res) => {
    res.send(getAverageStrikeRate());
});

app.get("/total-runs", (req, res) => {
    res.send(getTotalRuns());
});

app.get("/total-wickets", (req, res) => {
    res.send(getTotalWickets());
});

app.get('/team-summary', (req, res) => {
  const summary = getTeamSummary();
  res.send(summary); 
});


app.listen(4000, () => {
    console.log("Server is running at 4000");
})