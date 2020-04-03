const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.author.id === "283999079057326080") {
    msg.reply("STFU UMICH isn't that big of a flex. ")
  }
})
client.login("Njk0NzMzNDE0NTkwNDQ3NjU3.XoP9RQ.d0XZAEIFT3g_XfhNC6HxodxJUQI")
