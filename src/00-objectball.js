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
    
// Idea: Iterate over home and away team
// For each case, check keys until we get players key
// If we get players key, iterate through object to obtain the right player
// Once we find the player, return their points

function numPointsScored(playerName) {
    const game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                let playerObj = teamObj[teamKey];
                for (let playerKey in playerObj) {
                    if (playerKey === playerName) {
                        return playerObj[playerKey]['points'];
                    }
                }
            }
        }   
    }
}
// const pointsVar = numPointsScored('DeSagna Diop');

function shoeSize(playerName) {
    // Return players shoe size
}

function teamColors(teamName) {
    // Returns array of team colors
}

function teamNames() {
    // Return team names
}

function playerNumbers(teamName) {
    // Returns array of jersey numbers for the team
}

function playerStats(playerName) {
    // Returns object of that player's stats
}

function bigShoeRebounds() {
    // Returns number of rebounds associated with player with biggest shoe size
}

// Bonus Questions
function mostPointsScored() {
    // Returns player with most points
}

function winningTeam() {
    // Returns which team has most points
}

function playerWithLongestName() {
    // Returns player with longest name (assuming spaces count as an index)
}

// Super Bonus
function doesLongNameSteamATon() {
    // Returns true if palyer with longest name had most steals
}


