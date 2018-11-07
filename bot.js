const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "508216731773435905"; // ايدي السررفر
var channel = "508216731773435909";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر   **')
    },305);
})

client.login(process.env.BOT_TOKEN);
