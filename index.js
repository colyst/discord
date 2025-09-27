// index.js
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent // <- like the actual part for the bot lol
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  // ignore messages from bots
  if (message.author.bot) return;

  // normalize
  const content = message.content.trim().toLowerCase();

  if (content.includes("nigga")) {
    // message.reply -> mentions the user
    // message.channel.send does not
    message.channel.send('i forgive u 🙏');
  }
  if (content.includes("nigger")) {
    message.channel.send('i forgive u 🙏');
  }
  if (content.includes("nazi")) {
    message.channel.send('卐🍪');
  }
});

client.login(process.env.DISCORD_TOKEN);