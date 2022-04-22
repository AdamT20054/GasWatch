/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
	if (message.author.bot) return;

	//if (message.mentions.has(client.user)) {
        //message.channel.send(`Use \`${client.prefix}\`help to get help!`);
         //console.log(`${message.guild.name} mentioned Ethereum.`);

	//};

	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);


	const command = client.commands.find(cmd => cmd.name == args[0].toLowerCase());

	if (!command) return message.reply(`\`${args[0]}\` is not a valid command!`);

	const permission = message.member.permissions.has(command.permission);

	if (!permission) return message.reply(`You do not have the permission \`${command.permission, true}\` to run this command!`)

	command.run(message, args, client);
});
