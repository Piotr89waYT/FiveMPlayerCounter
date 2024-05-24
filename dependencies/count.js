const axios = require('axios');
const QBCore = require('QBCore');
const fivem = require('fivem');
const config = require('./config.json')

// Define the server IP and port
const serverIP = config.serverIP;
const serverPort = config.serverPort;

setInterval(async () => {
    try {
        // Create a new FiveM server instance
        const server = new fivem.Server(serverIP, serverPort);

        // Get the server info (including player count)
        server.getPlayers()
            .then(players => {
                const playerCount = players.length;
                console.log('Player count:', playerCount);

                // Fetch police data from QBCore
                const playerDataRequests = players.map(playerId => QBCore.Functions.GetPlayer(parseInt(playerId)));
                return Promise.all(playerDataRequests);
            })
            .then(playerData => {
                let policeCount = 0;
                let staffCount = 0;

                playerData.forEach(player => {
                    if (player && player.PlayerData && player.PlayerData.job && player.PlayerData.job.name === config.jobName) {
                        policeCount++;
                    }
                });

                console.log('Data sent to Discord bot');
            })
            .catch(error => {
                console.error('Error occurred:', error);
            });
    } catch (error) {
        console.error('Error occurred:', error);
    }
}, 60000); // Update every 60 seconds
