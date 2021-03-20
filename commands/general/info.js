module.exports = {
    name: 'info',
    guildOnly: true,
    execute(message, Discord) {
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('blue')
        .setTitle('CALC 21200 INFORMATION')
        .setDescription('Please check one of these if you need info on exams!')
        .addFields(
            { name: `Professor's website!`, value: `[click!](https://profcleary.github.io/math212/index.html)` },
            { name: `Lecture Recordings!`, value: `[click (L1-9)](https://drive.google.com/drive/folders/1mOOZR2Oxi0Kk7SA73L7HQrxt6xPFotwz?usp=sharing)` },
            { name: `Lecture Recordings!`, value: `[click (L10+)](https://drive.google.com/drive/folders/1CN_nwijjZIzZXeD1GIOTr87sAyt3blOx)` },
        )
        .setImage(`https://cdn.discordapp.com/attachments/806239694626750464/806972448666681404/unknown.png`);

        message.channel.send(infoEmbed);
    },
};