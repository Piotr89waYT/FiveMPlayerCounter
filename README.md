# FiveMPlayerCounter

**IF YOU DO NOT KNOW WHAT YOU ARE DOING DOWNLOAD THE RELEASE. IF YOU DO KNOW WHAT YOU ARE DOING DOWNLOAD THE SOURCE**

Discord bot that count the amount of players online. It's made to count and divide players into roles: Police and Player.

If this bot does turn out to be popular and people will want more features or something, I will continue development and maybe even host this bot myself making a config panel for the users so they can enjoy a simple bot that keeps track of your FiveM player statistics for you.

**!!THIS BOT ONLY WORKS WITH THE QBCORE FRAMEWORK. BUT IF YOU WANT TO MAKE THIS WORK WITH ESX OR ANY OTHER FRAMEWORK OUT THERE, BE MY GUEST. JUST PROVIDE CREDIT PLEASE AND THANK YOU!!**

Made by Piotr89waYT and ChatGPT (kek). I made this for the 90s RP server I am a developer. They way the bot works is simple. There is a count script which goes and uses both the QBcore API and FiveM API.

QBcore only counts people with the qb-policejob script that 90% of the server use on FiveM.


If you have any changes/features you want to add, go right ahead, I barely touch JavaScript and I used this project as a learning experience. Thanks for using this bot :*

This bot uses 6 packages from the npm site.

- NodeJS
- dotenv
- discordJS
- axios
- fivem
- QBcore

# THE WAY THIS WORKS

To accuratly explain how this bot and the scripts work, it's helpful to break the flow up into 3 stages.

**Stage 1**

Stage 1 is the server stage. The script uses QB-Core and the default FiveM libaries for JavaScript. It begins by creating a server instance within the FiveM library to allow the script to find which server it has to read from using the server IPs and Ports. After that it fetches the Player count from the FiveM library and the Police Count online from the QB-Core library. The way it finds the Police count is via the qb-police job name. From there the script hosts a local HTTP server, again from the FiveM library. This will allow the dicord bot to fetch the data.

**Stage 2**

Stage 2 is the Bot stage. Whilst stage 1 is happening over on the actual FiveM server stage 2 initializes the discord bot. The bot launches and does some console.logs to check if everything is working smoothly.

**Stage 3**

Stage 3 is where the magic happens. Once you execute the slash command the bot and script work in hand via the HTTP server, the information gets sent and received and once it gets received, a discord message is sent into the chat with the Player count.

# DOCUMENTATION

Setting the discord bot up:

First go to the Discord Developer Portal and create a new bot and assign it administrator permissions. After that grab the token for it and got to the 'dotenv.env' file and add your token into there. Dotenv is designed to keep your token secure from hackers and all sorts of bad people when you are hosting your bot.

Config and install:

First make sure your server supports JavaScript. You do this by making a "fxmanifest.lua" file. I have provided on in the "dependencies" If you want to know what it looks like go in there and have a look.

Next up you will need the "count.js" (again you will find it in the "dependencies" folder). Put that in your [RESOURCES] folder or make a new folder for the scripts or something.

After you get that script into the server add it to your server config and load it up.

From here everything should work without an issue.

Of course host this bot, either of your FiveM server or a sperate hosting. No clue what you choose, just make sure it works.

Config.json:

The config json stores everything for the server owner/developer that will use this for their own servers. Everything from role names to even the bot token. If you are unexperienced with JavaScript or with development in general just edit the config file.

The config file stores some criticaly needed information in order for the count.js script to work. It need the server IP and Port to know where to pull the information from. Inside the config there is also the 'jobName' config. That stores the name of the police job. By default the job should just be called 'police' but if it's not adjust the 'jobName' accordingly. Don't touch the localhost unless you are changing the localhost port within the code.
