const fs = require('fs');
module.exports = {
  name: 'amogus',
  amogus(message) {
    var text = fs.readFileSync('./commands/data/amogus.txt', { "encoding" : "utf-8" });
    message.channel.send(text);
  },
};
