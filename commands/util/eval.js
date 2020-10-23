const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class Eval extends Command {
    constructor(client) {
        super(client, {
            name: "eval",
            description: "Evaluates JavaScript code.",
            group: "util",
            aliases: ['evaluate'],
            memberName: "eval",
            ownerOnly: true,
            args: [{
                key: 'code',
                prompt: "What code would you like to evaluate?",
                type: 'string'
            }]
        })
    }
    run(message, { code }) {
        try {
            let hrStart = process.hrtime();
            let hrDiff = process.hrtime(hrStart);
            let toEval = eval(code);
                typeof toEval !== 'string' ? toEval = require('util').inspect(toEval) : '';

            const embed = new MessageEmbed()
                .setTitle(`Executed in: *${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ""}${hrDiff[1] / 1000000}ms*`)
                .setColor(`RANDOM`)

                .addField('Input:', `\`\`\`js\n${code.length > 1900 ? 'Too Much Input to show.' : code}\`\`\``)
                .addField(`Output:`, `\`\`\`js\n${toEval.length > 1900 ? 'Too Much Output to Show.' : toEval}\`\`\``)
                .addField('Typeof', `\`\`\`css\n${typeof toEval}\`\`\``)
            message.channel.send({ embed });

        } catch(err) {

            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`Error While Evaluating`)
                .addField('Input:', `\`\`\`javascript\n${code.length > 1900 ? 'Too Much Input to show.' : code}\`\`\``)
                .addField('Outputted Error:', `\`\`\`${err.message}\`\`\``)
            message.channel.send({ embed });

        }
    }
}