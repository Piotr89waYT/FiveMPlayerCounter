const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('PlayerCount')
        .setDescription('Fetches the number of players online'),
    async execute(interaction) {
        await interaction.reply()
    },
};