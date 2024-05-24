const { Client, Events, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const { token } = require(dotenv);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Bot is online!');
});

// Event listener for slash commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'getcounts') {
        const { playerCount, policeCount } = await getCounts();
        await interaction.reply(`Player count: ${playerCount}\nPolice count: ${policeCount}`);
    }
});

// Function to get player count and police count from the API
async function getCounts() {
    try {
        const response = await axios.get(config.apiURL);
        return response.data;
    } catch (error) {
        console.error('Error fetching counts:', error);
        return { playerCount: 0, policeCount: 0 };
    }
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'getcounts') {
        const { playerCount, policeCount } = await getCounts();
        await interaction.reply(`Player count: ${playerCount}\nPolice count: ${policeCount}`);
    }
});

client.login(token);