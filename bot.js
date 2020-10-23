// Others
const path = require('path');
const { success, error, warning } = require('log-symbols')

// Files not packages
const config = require('./config')

// Importing from packages
const { CommandoClient } = require('discord.js-commando');

const bot = new CommandoClient({
    commandPrefix: '--',
    owner: ['720021153594343526']
})

bot.registry
	.registerDefaultTypes()
	.registerGroups([
		['mod', 'Moderation'],
        ['misc', 'Misc'],
        ['image', 'Image or Gif'],
        ['info', "Information"]
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
        eval: false,
        ping: false,
        unknownCommand: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));


bot.on('ready', async() => {
    console.log(`${success} Online on login ${bot.user.tag}!`)

    bot.user.setPresence( { activity: { name: `--help`}, status: 'idle'})
})

bot.on('error', async(e) => {
    console.error(e)
})
    
bot.login(`${config.token}`);