const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});

require("dotenv").config();

const SentMessages = require('./interactions/SentMessages');

client.on("ready", () => console.log("logged as " + client.user.tag));

client.on('messageCreate', async message => {
  const messageContent = message.channel.lastMessage.content;
  SentMessages.messageHandler(messageContent, message);
});

client.login(process.env.TOKEN);
