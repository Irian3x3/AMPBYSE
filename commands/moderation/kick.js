const { Command } = require('discord.js-commando');

module.exports = class Kick extends Command{
    constructor(client) {
        super(client, {
            name: "kick",
            description: "Kicks a member from the server (unfinished)",
            memberName: "kick",
            group: "mod"
        })
    }
    run(message) {
        message.say('This command doesn\'t do anything yet ok bye')
    }
}