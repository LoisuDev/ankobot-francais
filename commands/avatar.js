const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp', 'pp'],
  description: 'Retourne votre avatar ou celui de la personne que vous avez mentionée.',
  
  async execute(bot, message, args) {
    let member = message.mentions.users.first();
    if(!member) member = message.author;
    let avatar = member.avatarURL({size: 1024});
    
    let embed = new Discord.MessageEmbed()
      .setTitle(`Avatar de ${member.username} :`)
      .setImage(avatar)
      .setFooter('avatar')
      .setTimestamp()
    
    message.channel.send(embed);
  }
}
