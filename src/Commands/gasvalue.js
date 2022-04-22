const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
    name: "gasvalue",
    description: "gas filler",
    permission: "SEND_MESSAGES",

    async run(message, args, client,) {
        try {
            const fs = require('fs');
            const data = args[1]

            if(!Number.isNaN(+data))
                fs.writeFile(`gasvalue.json`, data, (err) => {
                    if (err || Number.isNaN(+data)) {
                        console.log(err);
                    }
                    else {
                        message.reply(`Value updated to: \`${data}\`gwei`);
                    }
                });  
            else {
                message.reply("Something went wrong. Check that the number given is an integer.\n\n")
            }
        }   
        catch(err) {
            console.log(err)
        }

    }
});