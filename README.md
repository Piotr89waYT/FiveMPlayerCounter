# FiveMPlayerCounter
Discord bot that count the amount of players online. It's made to count and divide players into roles: Police, Staff and Player.

!!THIS BOT ONLY WORKS WITH THE QBCORE FRAMEWORK AND TXADMIN. BUT IF YOU WANT TO MAKE THIS WORK WITH ESX OR ANY OTHER ADMIN FRAMEWORK OUT THERE, BE MY GUEST. JUST PROVIDE CREDIT PLEASE AND THANK YOU!!

Made by Piotr89waYT and ChatGPT (kek). I made this for the 90s RP server I am a developer. They way the bot works is simple. There is a count script which goes and uses both the QBcore API and FiveM API.

QBcore only counts people with the qb-policejob script that 90% of the server use on FiveM.


If you have any changes/features you want to add, go right ahead, I barely touch JavaScript and I used this project as a learning experience. Thanks for using this bot :*

This bot uses 8 packages from the npm site.

- NodeJS
- dotenv
- discordJS
- axios
- fivem
- QBcore
- express
- bodyparser

Config and install

First make sure your server supports JavaScript. You do this by making a "fxmanifest.lua" file. I have provided on in the "dependencies" If you want to know what it looks like go in there and have a look.

Next up you will need the "count.js" (again you will find it in the "dependencies" folder). Put that in your"[RESOURCES]" folder or make a new folder for the scripts or something.

After you get that script into the server add it to your server config and load it up.

From here everything should work without an issue.


Documentation.

Config.json

The config json stores everything for the server owner/developer that will use this for their own servers. Everything from role names to even the bot token. If you are unexperienced with JavaScript or with development in general just edit the config file.