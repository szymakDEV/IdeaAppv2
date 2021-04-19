const Discord = require("discord.js");
const prettyMilliseconds = require("pretty-ms");
const prefix = "/"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async() => {

    console.log(`[INFORMACJE] IdeaApp został pomyślnie załadowany!`)

    bot.user.setActivity("IdeaApp // V2", {
        type: "PLAYING"
    });
});

bot.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()

if (command == "pomoc") {
    var embed = new Discord.MessageEmbed()
    .setTitle("IdeaApp")
    .setDescription("<:tak:825432601502023761> - Pomyślnie użyłeś/aś komendy **/pomoc**, jeśli masz jakieś wątpliwości co do błędów w bocie zgłoś to na serwerze wsparcia [Kliknij!](https://discord.com/channels/822408863763791892/824294346261659668/826898102485123112)\n\n**<:Verified:825374228743979009> - Prefix:**\n```/```\n\n**<:cmd:826887318215590009> - Podstawowe** [1]\n```/pomoc - Tutaj jesteśmy!\n/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia```\n\n**<:fun:826894016284983406> - Fun** [0]\n```/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia```\n\n**<:warning:825432577857814568> - Moderacyjne** [0]\n```/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia\n/test - Tekst do wypełnienia```")
    .setFooter(`Invoked ${message.author.username}`)
    .setTimestamp();

    message.channel.send(embed)
    }
});

bot.login('ODI1NzgxNjY0NzE3ODY1MDIw.YGC7Gw.Ym6FneF7U8J7NijF7pVx1-0Nwoo')