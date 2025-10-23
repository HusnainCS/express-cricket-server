import { players } from "./playersInfo.js"

//  Get full list
export function getList() {
  return players;
}

//  Get player by ID
export function getPlayerById(id) {
  return players.find(p => p.id === id);
}

//  Search by name
export function searchPlayer(name) {
  return players.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
}

//  Batsmen list
export function getBatsmen() {
  return players.filter(p => p.role.toLowerCase().includes("batsman"));
}

//  Bowlers list
export function getBowlers() {
  return player.filter(p => p.role.toLowerCase().includes("bowler"));
}

// All-rounders list
export function getAllRounders() {
  return players.filter(p => p.role.toLowerCase().includes("all-rounder"));
}

//  Wicketkeepers list
export function getWicketKeepers() {
  return players.filter(p => p.role.toLowerCase().includes("wicketkeeper"));
}

//  Captain
export function getCaptain() {
  return players.find(p => p.teamRole === "Captain");
}

//  Highest scorer
export function getHighestScorer() {
  return [...players].sort((a, b) => b.totalScore - a.totalScore)[0];
}

// Highest wicket taker
export function getHighestWicketTaker() {
  return [...players].sort((a, b) => b.totalWickets - a.totalWickets)[0];
}

//  Best strike rate
export function getBestStrikeRate() {
  return [...players].sort((a, b) => b.strikeRate - a.strikeRate)[0];
}

//  Most catches
export function getMostCatches() {
  return [...players].sort((a, b) => b.totalCatches - a.totalCatches)[0];
}

// Young players (<25)
export function getYoungPlayers() {
  return players.filter(p => p.age < 25);
}

// Experienced players (>30)
export function getExperiencedPlayers() {
  return players.filter(p => p.age > 30);
}

// Top 5 batsmen
export function getTopBatsmen() {
  return [...players].sort((a, b) => b.totalScore - a.totalScore).slice(0, 5);
}

// Top 5 bowlers
export function getTopBowlers() {
  return [...players].sort((a, b) => b.totalWickets - a.totalWickets).slice(0, 5);
}

// Random player
export function getRandomPlayer() {
  return players[Math.floor(Math.random() * player.length)];
}

// Average strike rate
export function getAverageStrikeRate() {
  const avg = players.reduce((sum, p) => sum + p.strikeRate, 0) / player.length;
  return avg.toFixed(2);
}

//  Team total runs
export function getTotalRuns() {
  return players.reduce((sum, p) => sum + p.totalScore, 0);
}

//  Team total wickets
export function getTotalWickets() {
  return players.reduce((sum, p) => sum + p.totalWickets, 0);
}

//  Team summary
export function getTeamSummary() {
  return {
    totalRuns: getTotalRuns(),
    totalWickets: getTotalWickets(),
    averageStrikeRate: getAverageStrikeRate(),
    totalPlayers: players.length
  };
}

// Using Post Request
export function postPlayer(player){
  players.push(player);
}

// Using Put Request
export function updatePlayer(id, player){
  players.map((iplayer, index) => {
    if(iplayer.id == id){
      players[index] = player;
    }
  });
  return player;
}

// Using Delete Request

export function deletePlayer(id){
  let playerToDelete = null;
  players.map((player, index) => {
    if(player.id == id){
    playerToDelete = index;
    }
  });
  players.splice(playerToDelete,10);
  return id;

}