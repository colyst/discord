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

const ping = new Map();

client.once('ready', () => {
  console.log(`${client.user.tag}`);
});

client.on('messageCreate', message => {
  // ignore messages from bots
  if (message.author.bot) return;

  // normalize
  const content = message.content.trim().toLowerCase();
  const user = message.author.id;

  if (content.includes("nigga")) {
    // message.reply -> mentions the user
    // message.channel.send does not
    message.channel.send("i forgive u 🙏");
  }
  
  if (content.includes("nigger")) {
    message.channel.send("i forgive u 🙏");
  }

  if (content.includes("nazi")) {
    message.channel.send("卐🍪");
  }

  if (content.includes("<@1421622965958742217>")) {
    message.reply("fuck you don't ping me bitch");
    ping.set(user, 'pong');
    return;
  }

  if (content.includes(stfu)) {
    const state = ping.get(user);

    if (state === 'pong') {
      message.channel.send('no u');
      ping.delete(user); // reset state after
      return;
    }
  }
});

client.login(process.env.DISCORD_TOKEN);