/** @format */

const Event = require("../Structures/Event.js");
const Discord = require("discord.js");

module.exports = new Event("messageCreate", (client, message) => {
	if (message.author.bot) return;

	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0].toLowerCase());

	const invalidEmbed = new Discord.MessageEmbed();
	invalidEmbed.setDescription(`\`${args[0]}\` is not a valid command!`)
		.setColor("#00FFFF")

	if (!command) return message.reply({ embeds: [invalidEmbed] })

	const permEmbed = new Discord.MessageEmbed();
	permEmbed.setDescription(`You do not have the permission \`${command.permission}\` to run this command!`)
		.setColor("#00FFFF")

	const permission = message.member.permissions.has(command.permission);

	if (!permission) return message.reply({ embeds: [permEmbed] })

	command.run(message, args, client);
});
