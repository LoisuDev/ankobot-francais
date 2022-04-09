const Discord = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'bans the member mentionned',
    usage: '%ban <@member> [reason]',
    permissions: 'Ban Members',

    async execute(bot, message, args) {
        
        message.channel.send("Cette commande n'est pas encore disponible en Français. Restez à l'affût des mises à jour du repo sur Github: https://github.com/azusa-neko/ankobot-francais")
        
        if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send('You can\'t do that. ERR 04')
        

        let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.channel.send('Invalid Arguments provided. ERR 01');
        if(member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send('You can\'t ban that person! ERR 05')
        let reason = args.slice(1).join(" ");
        if(!reason) reason = null;


        let mute_embed = new Discord.MessageEmbed()
            .setColor('e410d3')
            .setDescription(`***<@${member.id}> was banned.***`)
        await member.ban({reason: reason})
        await message.channel.send(mute_embed)
    }
}
