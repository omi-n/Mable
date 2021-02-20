const fs = require('fs');
module.exports = {
  name: 'help',
  help(message) {
    var text = fs.readFileSync('./commands/data/commands.txt', { "encoding" : "utf-8" });
		message.channel.send(text);
  },
};
