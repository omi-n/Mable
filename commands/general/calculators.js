module.exports = {
    name: 'calc',
    guildOnly: false,
    execute(message, Discord) {
        const calcEmbed = new Discord.MessageEmbed()
        .setColor('darkgreen')
        .setTitle('Useful Calculators/Tools!')
        .setDescription('All the calculators you can think of.')
        .addFields(
            { name: 'Graphing Calculator', value: '[desmos](https://www.desmos.com/calculator)' },
            { name: 'Integral Calculator', value: '[integral-calc](https://www.integral-calculator.com/)' },
            { name: 'Derivative Calculator', value: '[deriv-calc](https://www.derivative-calculator.net/)' },
            { name: 'Partial Fractions Calculator (Symbolab)', value: '[symbolab](https://www.symbolab.com/solver/partial-fractions-calculator/partial%20fractions%20%5Cfrac%7B7x%5E%7B2%7D%2B3x%2B8%7D%7Bx%5E%7B3%7D-1%7D/)' },
            { name: 'Series Calculator (Symbolab)', value: '[symbolab](https://www.symbolab.com/solver/series-calculator)' },
        );
        message.channel.send(calcEmbed);
    },
};