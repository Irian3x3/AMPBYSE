const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')

module.exports = class BotInfo extends Command {
    constructor(client) {
        super(client, {
            name: "botinfo",
            description: "Provides information or statistics about the bot.",
            memberName: "botinfo",
            group: 'util',
            aliases: ['bot', "bot-info", 'infobot', 'info-bot', 'bi'],

        })
    }
    run(message) {
        const thing = new MessageEmbed()
        .setAuthor(`Info about ${this.client.user.username}`)
        .setColor('RANDOM')
        .setDescription(`${this.client.user.username} is (A)nother (M)ulti-(P)urpose (B)ot (Y)ou (S)ee (E)verywhere. Created by **Irian3x3#0001**, this bot is made with Discord.js and Commando.`)
        return message.channel.send(thing)
    }
}