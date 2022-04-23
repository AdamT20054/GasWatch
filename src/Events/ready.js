const Event = require("../Structures/Event.js");
const { default: axios } = require("axios");

module.exports = new Event("ready", client => {

    // Set the initial activity while the bot loads and completes the first cycle
    try {
        client.user.setActivity(`Starting up <3 | Made with love`)
    }
    catch(err) {
        console.log(err)
    }


    let i = 0 // for the alternating status
    try {
        setInterval(async () => {
            const slow = await axios.get(`https://ethergas.io/low`);
            const standard = await axios.get(`https://ethergas.io/standard`);
            const fastest = await axios.get(`https://ethergas.io/fast`);      
            
            client.user.setActivity(`${fastest.data} | ${standard.data} | ${slow.data}`)
        
        }, 15000);
    }
    catch(err) {
        console.log(err)
    }

    console.log(`Bot is online!`);

});


