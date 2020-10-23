const { Command } = require('discord.js-commando');

module.exports = class Say extends Command{
    constructor(client) {
        super(client, {
            name: "say",
            group: 'misc',
            memberName: 'say',
            description: "Says what you tell it to say.",
            args: [
                {
                    key: "toSay",
                    prompt: "What would you like me to say?",
                    type: "string",
                },
            ],
        })
    }
    run(message, { toSay }) {

        message.say(`${message.author} says: ${toSay}`)
    }
}