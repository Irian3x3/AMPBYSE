const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')

module.exports = class Ping extends Command{
    constructor(client) {
        super(client, {
            name: "ping",
            group: "util",
            description: "Provides the bot ping/latency.",
            memberName: "ping",
            throttling: {
                usages: 5,
                duration: 5
            }
        })
    }
    
    async run(message) {
        const $embed1 = new MessageEmbed()
        .setDescription("Pinging...")
        .setColor('BLACK');

        const msg = await message.say($embed1)
        const $embed2 = new MessageEmbed()
        .setDescription(`**Message Latency**: \`${Date.now() - message.createdTimestamp} ms\` \n **API Latency**: \`${Math.round(this.client.ws.ping)} ms\``)
        .setColor('RANDOM');
        msg.edit($embed2)
    }
}