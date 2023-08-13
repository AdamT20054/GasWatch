const Event = require("../Structures/Event.js");
const {default: axios} = require("axios");

module.exports = new Event("ready", client => {

    // Set the initial activity while the bot loads and completes the first cycle
    try {
        client.user.setActivity(`Starting up <3 | Made with love`)
    } catch (err) {
        console.log(err)
    }


    let i = 0 // for the alternating status
    try {
        setInterval(async () => {
            try {
                const response = await axios.get("https://data.spiceai.io/eth/v0.1/gasfees");
                client.user.setActivity(`⚡${response.data.fast} | ✨${response.data.normal} | 🐢${response.data.slow}`);
            } catch (error) {
                console.error("Error fetching gas data:", error);
            }
        }, 30000);
    } catch (err) {
        console.log(err)
    }

    console.log(`Bot is online!`);

});


