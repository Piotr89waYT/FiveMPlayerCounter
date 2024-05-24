const express = require('express');
const app = express();
const QBCore = global.exports['qb-core'].GetCoreObject();
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
                function getPoliceCount() {
                    const players = QBCore.Functions.GetPlayers();
                    let policeCount = 0;
                
                    players.forEach(playerId => {
                        const player = QBCore.Functions.GetPlayer(playerId);
                        if (player && player.PlayerData.job.name === config.jobName) {
                            if (player.PlayerData.job.onduty) {
                                policeCount++;
                            }
                        }
                    });

                    return policeCount;
                }

                const policeCount =  getPoliceCount();
                console.log('${policeCount} pigs online');
                console.log('Data sent to Discord bot');
            })
            .catch(error => {
                console.error('Error occurred:', error);
            });
    } catch (error) {
        console.error('Error occurred:', error);
    }
}, 60000); // Update every 60 seconds


//FiveM HTTP Server

// Endpoint to get player and police counts
app.get('/getCounts', async (req, res) => {
    try {
        const server = new fivem.Server(serverIP, serverPort);
        const players = await server.getPlayers();
        const playerCount = players.length;

        const policeCount = QBCore.Functions.GetPlayers().reduce((count, playerId) => {
            const player = QBCore.Functions.GetPlayer(playerId);
            if (player && player.PlayerData.job.name === config.jobName && player.PlayerData.job.onduty) {
                return count + 1;
            }
            return count;
        }, 0);

        res.json({ playerCount, policeCount });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Start the HTTP server
app.listen(3000, () => {
    console.log('API server running on port 3000');
});