const Discord = require("discord.js");
const client = new Discord.Client();
const perfix = "$"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  bot.user.setStatus('Online')
  
  bot.user.setGame('$help For Help')

});

client.on('message', msg => {
  if (msg.content === perfix + 'help') {
      msg.reply('Please check your direct messages');
      msg.author.sendMessage("The commands is: $help for commands help, $crator to see who create this bot")
  }
});
client.on('message', msg => {
if (msg.content === perfix + 'creator') {
msg.reply('discord bot creator is: Ben');
  }
});

client.login(process.env.BOT_TOKEN);
