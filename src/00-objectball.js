function gameObject() {
    return  {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },    
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}
    
// Declare gameObj object
const gameObj = gameObject();
const playerStatsObj = {...gameObj.home.players, ...gameObj.away.players};

// Function Building
/* Idea: 
    Iterate team keys in gameObj
    For each case, iterate keys until we get players key
    If we get players key, iterate through object to obtain the right player
    Once we find the player, return their points

    New Idea:
    Return points of player if player stats exists in allPlayerStats, else, return not a player
*/
const numPointsScored = playerName => {
    // for (let gameKey in gameObj) {
    //     let teamObj = gameObj[gameKey].players;
    //     if (playerName in teamObj) {
    //         return teamObj[playerName]['points'];
    //     } 
    // }   
    // return 'No player with that name';
    // return playerStatsObj[playerName] ? playerStatsObj[playerName].points : 'No player with that name';
    return playerStatsObj.hasOwnProperty(playerName) ? playerStatsObj[playerName].points : 'No player with that name';
}

/* Idea: 
    Use same iterating method as above and return shoe size instead of points

    New Idea:
    return shoe size or no player using ternary operator
*/
const shoeSize = playerName => {
    // Return players shoe size
    // for (let gameKey in gameObj) {
    //     let teamObj = gameObj[gameKey]['players'];
    //     if (playerName in teamObj) {
    //         return teamObj[playerName]['shoe'];
    //     } 
    // }   
    // return 'No players with that name';

    return playerStatsObj[playerName] ? playerStatsObj[playerName].shoe : 'No player with that name';
}

/* Idea: 
    Iterate over first set of keys
    Check if teamKey === argument
    If it does, return array of team colors

    New Idea: 
    Use ternary operator to check if teamName exists in gameObj then return colors if true, no team name if false
*/
const teamColors = teamName => {
    // Returns array of team colors
    // for (let teamKey in gameObj) {
    //     if (teamKey === teamName) {
    //         return gameObj.teamKey.colors;
    //     }  
    // }
    // return 'No team with that name';
    return gameObj[teamName]
}

/* Idea:
    Return the keys of gameObj object
*/
const teamNames = () => {
    // Return team names
    return Object.keys(gameObj);
}

// takes in teamName argument and returns array of jersey numbers for that team
function playerNumbers(team) {
    // Returns array of jersey numbers for the team
    if (gameObj.home.teamName === team) {
        let homeJerseyNum = [];
        for (let playerName in gameObj.home.players) {
            homeJerseyNum.push(gameObj.home.players[playerName].number);
        }
        return homeJerseyNum;
    } else if (gameObj.away.teamName === team) {
        let awayJerseyNum = [];
        for (let playerName in gameObj.away.players) {
            awayJerseyNum.push(gameObj.away.players[playerName].number);
        }
        return awayJerseyNum;
    } else {
        return 'No team with that name.';
    }
}

// takes playerName as arg and returns objetc of player's stats
function playerStats(playerName) {
    // Returns object of that player's stats
    return playerStatsObj.hasOwnProperty(playerName) ? playerStatsObj[playerName] : 'No player with that name.';
}

// returns numRebounds of player with biggest shoe size
function bigShoeRebounds() {
    // Returns number of rebounds associated with player with biggest shoe size
    let largestShoe = 0;
    for (let playerName in playerStatsObj) {
        if (playerStatsObj[playerName].shoe > largestShoe) {
            largestShoe = playerStatsObj[playerName].shoe;
        }
    }
    for (let playerName in playerStatsObj) {
        if (playerStatsObj[playerName].shoe === largestShoe) {
            return playerStatsObj[playerName].rebounds;
        }
    }
}

// Bonus Questions
// Returns player with most points
function mostPointsScored() {
    // Returns player with most points
}

// Returns team with most points
function winningTeam() {
    // Returns which team has most points
    let homePoints = 0
    let awayPoints = 0

    for (let team in gameObj) {
        const {players} = gameObj[team]
        const teamPlayersStatsArray = Object.values(players)

        for (let stat of teamPlayersStatsArray) {
            if (team === 'home') {
                homePoints += stat.points
            } else {
                awayPoints += stat.points
            }
        }
    }
    
    return homePoints > awayPoints ? gameObj.home.teamName : gameObj.away.teamName
}

// Player with longest name
function playerWithLongestName() {
    // Returns player with longest name (assuming spaces count as an index)
}

// Super Bonus
// returns true if player with longest name had most steals
function doesLongNameSteamATon() {
    // Returns true if palyer with longest name had most steals
}


