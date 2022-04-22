/** @format */

console.clear();
const config = require("./Data/config.json");

const Client = require("./Structures/Client.js");

const client = new Client(`Bot`, { presence: { status: 'dnd' } });





client.start(config.token);
