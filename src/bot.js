const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ],
});
const messages = [
  "What do dentists call their x-rays?",
  "What did one ocean say to the other ocean?",
  "Did you hear about the first restaurant to open on the moon?",
  "How do you calculate the heigth of snake ?",
];
const arun = [
  "https://ibb.co/86D3s6r",
  "https://ibb.co/jw5LtRL",
  "https://ibb.co/dD8cH3t",
];
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
const arunrandom = arun[Math.floor(Math.random() * arun.length)];
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
      message.channel.send(
        " Messaging\
                                                                                  `Hi`,`Hello`,`How r u`,`Fine`,`What are  you doing`,`Tell me a joke`,`And some funny word😏`\
                             Commands(use Meme in front)\
                            `instagram`,`youtube`,`meme`,`say`,`time`,`Arun`\
                                        ***For any queries, Message thameem***"
      );
    }
    if (CMD_NAME === "instagram") {
      message.channel.send("https://www.instagram.com/thameem_your_friend/");
    }
    if (CMD_NAME === "youtube") {
      message.channel.send("https://www.youtube.com/c/Thameemstudios");
    }
    if (CMD_NAME === "meme") {
      message.channel.send(
        "please wait some while😅 , I am slow as your Internet"
      );
      const https = require("https");
      const Discord = require("discord.js");
      const url = "https://www.reddit.com/r/meme/hot/.json?limit=100";
      https.get(url, (result) => {
        var body = "";
        result.on("data", (chunk) => {
          body += chunk;
        });

        result
          .on("end", () => {
            var response = JSON.parse(body);
            var index =
              response.data.children[Math.floor(Math.random() * 99) + 1].data;

            if (index.post_hint !== "image") {
              var text = index.selftext;
              const textembed = new Discord.MessageEmbed()
                .setTitle(subRedditName)
                .setColor(9384170)
                .setDescription(`[${title}](${link})\n\n${text}`)
                .setURL(`https://reddit.com/${subRedditName}`);

              message.channel.send(textembed);
            }

            var image = index.preview.images[0].source.url.replace(
              "&amp;",
              "&"
            );
            var title = index.title;
            var link = "https://reddit.com" + index.permalink;
            var subRedditName = index.subreddit_name_prefixed;

            if (index.post_hint !== "image") {
              const textembed = new Discord.RichEmbed()
                .setTitle(subRedditName)
                .setColor(9384170)
                .setDescription(`[${title}](${link})\n\n${text}`)
                .setURL(`https://reddit.com/${subRedditName}`);

              message.channel.send(textembed);
            }
            console.log(image);
            const imageembed = new Discord.MessageEmbed()
              .setTitle(subRedditName)
              .setImage(image)
              .setColor(9384170)
              .setDescription(`[${title}](${link})`)
              .setURL(`https://reddit.com/${subRedditName}`);
            message.channel.send(imageembed);
          })
          .on("error", function (e) {
            console.log("Got an error: ", e);
          });
      });
    }
    if (CMD_NAME === "say") {
      message.channel.send(args.join(" "));
    }
    if (CMD_NAME === "time") {
      const currentDate = new Date();
      message.channel.send(currentDate.toLocaleString());
    }
    if (CMD_NAME === "arun") {
      message.channel.send(arunrandom);
    }
  }

  if (message.content === "Hi") {
    message.reply("Hello " + message.author.username);
  }
  if (message.content === "Hello") {
    message.reply("How are you ?  ");
  }
  if (message.content === "How r u") {
    message.reply("I am feeling bored rn, chat with me.....");
  }
  if (message.content === "Fine") {
    message.reply("You should not be fine,Be sad or happy");
  }
  if (message.content === "What are you doing") {
    message.reply(
      "chatting with you and sending this data to my master thameem😅"
    );
  }
  if (message.content === "Fuck you") {
    message.channel.send(message.author.username + " is a Gay🤣🤣🤣");
  }
  if (message.content === "Tell me a joke") {
    message.reply(randomMessage);
    if (randomMessage === "What do dentists call their x-rays?") {
      message.channel.send("Tooth pics !!!");
    }
    if (randomMessage === "What did one ocean say to the other ocean?") {
      message.channel.send("Nothing , they just waved !!!");
    }
    if (
      randomMessage ===
      "Did you hear about the first restaurant to open on the moon?"
    ) {
      message.channel.send("It had great food, but no atmosphere.");
    }
    if (randomMessage === "How do you calculate the heigth of snake ?") {
      message.channel.send("Probably by inches, coz they don't have feets");
    }
   
  }
  if (message.content === "arun"){
    message.channel.send("https://vimeo.com/664335621");
  }
});
client.on("ready", () => {
  console.log("Bazingaaaa✌️");
});
client.login("");
