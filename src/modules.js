import { playersInfo } from "./playersInfo.js"

//  Get full list
export function getList() {
  return playersInfo;
}

//  Get player by ID
export function getPlayerById(id) {
  return playersInfo.find(p => p.id === id);
}

//  Search by name
export function searchPlayer(name) {
  return playersInfo.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
}

//  Batsmen list
export function getBatsmen() {
  return playersInfo.filter(p => p.role.toLowerCase().includes("batsman"));
}

//  Bowlers list
export function getBowlers() {
  return playersInfo.filter(p => p.role.toLowerCase().includes("bowler"));
}

// All-rounders list
export function getAllRounders() {
  return playersInfo.filter(p => p.role.toLowerCase().includes("all-rounder"));
}

//  Wicketkeepers list
export function getWicketKeepers() {
  return playersInfo.filter(p => p.role.toLowerCase().includes("wicketkeeper"));
}

//  Captain
export function getCaptain() {
  return playersInfo.find(p => p.teamRole === "Captain");
}

//  Highest scorer
export function getHighestScorer() {
  return [...playersInfo].sort((a, b) => b.totalScore - a.totalScore)[0];
}

// Highest wicket taker
export function getHighestWicketTaker() {
  return [...playersInfo].sort((a, b) => b.totalWickets - a.totalWickets)[0];
}

//  Best strike rate
export function getBestStrikeRate() {
  return [...playersInfo].sort((a, b) => b.strikeRate - a.strikeRate)[0];
}

//  Most catches
export function getMostCatches() {
  return [...playersInfo].sort((a, b) => b.totalCatches - a.totalCatches)[0];
}

// Young players (<25)
export function getYoungPlayers() {
  return playersInfo.filter(p => p.age < 25);
}

// Experienced players (>30)
export function getExperiencedPlayers() {
  return playersInfo.filter(p => p.age > 30);
}

// Top 5 batsmen
export function getTopBatsmen() {
  return [...playersInfo].sort((a, b) => b.totalScore - a.totalScore).slice(0, 5);
}

// Top 5 bowlers
export function getTopBowlers() {
  return [...playersInfo].sort((a, b) => b.totalWickets - a.totalWickets).slice(0, 5);
}

// Random player
export function getRandomPlayer() {
  return playersInfo[Math.floor(Math.random() * playersInfo.length)];
}

// Average strike rate
export function getAverageStrikeRate() {
  const avg = playersInfo.reduce((sum, p) => sum + p.strikeRate, 0) / playersInfo.length;
  return avg.toFixed(2);
}

//  Team total runs
export function getTotalRuns() {
  return playersInfo.reduce((sum, p) => sum + p.totalScore, 0);
}

//  Team total wickets
export function getTotalWickets() {
  return playersInfo.reduce((sum, p) => sum + p.totalWickets, 0);
}

//  Team summary
export function getTeamSummary() {
  return {
    totalRuns: getTotalRuns(),
    totalWickets: getTotalWickets(),
    averageStrikeRate: getAverageStrikeRate(),
    totalPlayers: playersInfo.length
  };
}
