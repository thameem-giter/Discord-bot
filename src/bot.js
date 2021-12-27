const { Client, Intents,} = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ],
});
const PREFIX = "Meme "; //prefix
client.on("message", (message) => {
  console.log(
    //Made by Thameem on 26,dec,2021
    "The message is sent by",
    message.author.username,
    "and the message is",
    message.content
  );
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME === "help") {
      message.channel.send("I cant help you, Ask thameem for help.😏");
    }
    if (CMD_NAME === "instagram") {
      message.channel.send("https://www.instagram.com/thameem_your_friend/");
    }
    if (CMD_NAME === "youtube") {
      message.channel.send(
        "https://www.youtube.com/channel/UCeb1mhDXuS81LAnTeH63yYQ"
      );
    }
  }
  if (message.content === "Hi") {
    message.reply("Hello " + message.author.username);
  }
  if (message.content === "How r u") {
    message.reply("I am feeling bored rn, chat with me.....");
    
  }
 
});
client.on("ready", () => {
  console.log("Bazingaaaa✌️");
});
client.login("OTI0MTM1MDMwMTc4MDY2NTEy.YcaJ0A.gVE5cZH_6rWg_6rd3qIAnTPDxms");
