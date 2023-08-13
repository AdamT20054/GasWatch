const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "cooldown",
    description: "Cooldown filler",
    permission: "ADMINISTRATOR",

    async run(message, args, client,) {
        // Constructing embeds

        try {

            const fs = require('fs');
            const data = args[1]

            // Consturct successEmbed 
            const successEmbed = new Discord.MessageEmbed();
            successEmbed.setTitle(`Success!`)
                .setDescription(`Value updated to: **${data}** *ms*`)
                .setColor("#00FFFF")

            // Construct errorEmbed
            const errorEmbed = new Discord.MessageEmbed();
            errorEmbed.setTitle(`Something went wrong!`)
                .setDescription(`Check that the number given is an integer; the input received was: \`${data}\``)
                .setColor("#00FFFF")
                .setFooter({
                    text: `Support: https://discord.gg/YbtckEktmn`
                });

            if (!Number.isNaN(+data))
                fs.writeFile(`cooldownvalue.json`, data, (err) => {
                    if (err || Number.isNaN(+data)) {
                        console.log(err);
                    } else {
                        message.reply({embeds: [successEmbed]})
                    }
                });
            else {
                message.reply({embeds: [errorEmbed]})
            }
        } catch (err) {
            console.log(err)
        }

    }
});