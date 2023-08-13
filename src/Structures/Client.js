/** @format */
// @ts-check
const {default: axios} = require('axios');
const Discord = require("discord.js");
const intents = new Discord.Intents(30449);
const fs = require("fs");
const config = require("../Data/config.json");
const cooldown = new Set();

function cooldownfunc() {
    let cooldownvalue = fs.readFileSync("cooldownvalue.json").toString();
    cooldown.add("1");
    setTimeout(() => {
        cooldown.delete("1");
        // @ts-ignore
    }, cooldownvalue);
}


function ping() {
    return !cooldown.has("1");
}

class Client extends Discord.Client {
    constructor() {
        super({intents, allowedMentions: {repliedUser: false}});

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();

        this.prefix = config.prefix;

        this.once('ready', () => {
            this.watchGas();
        });
    }

    get endpoint() {
        return `https://data.spiceai.io/eth/v0.1/gasfees`;
    }

    async watchGas() {
        const res = await axios.get(this.endpoint).catch(console.error);
        const gasvalue = fs.readFileSync("gasvalue.json").toString();

        if (!res)
            return setTimeout(() => {
                this.watchGas();
            }, 500000);

        const gas = res.data.normal;

        if ((gas) <= gasvalue && (ping() === true)) {
            cooldownfunc()
            const slow = res.data.slow;
            const standard = res.data.normal;
            const fastest = res.data.instant;

            // Construct embed
            const pingEmbed = new Discord.MessageEmbed();
            pingEmbed.setTitle(`Ethereum has low gas!`)
                .setDescription(`<@&${config.RoleID}> ETH gas value is less than **${gasvalue}** *gwei*!`)
                .setColor("#00FFFF")
                .addFields({
                    name: "Fastest",
                    value: `${fastest}`,
                    inline: true
                }, {
                    name: "Standard",
                    value: `${standard}`,
                    inline: true
                }, {
                    name: "Slowest",
                    value: `${slow}`,
                    inline: true
                });


            this.channels.fetch(`${config.ChannelID}`)
                // @ts-ignore
                .then(channel => channel.send({embeds: [pingEmbed]}))
                .catch(console.error);
        }


        setTimeout(() => {
            this.watchGas();
        }, 300000);  // 3600000 = 1hr 900000 = 15min 300000 = 5min
    }

    start(token) {
        console.log(`Bot is starting up...`);

        fs.readdirSync("./src/Commands")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../Commands/${file}`);
                console.log(`Command ${command.name} loaded`);
                this.commands.set(command.name, command);
            });

        fs.readdirSync("./src/Events")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Event}
                 */
                const event = require(`../Events/${file}`);
                console.log(`Event ${event.event} loaded`);
                this.on(event.event, event.run.bind(null, this));
            });

        this.login(token).then(() => console.log(`Bot logged in!`));
    }
}

module.exports = Client;
