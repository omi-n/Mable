const mongo = require('mongoose');

module.exports = {
  name: 'addp',
  guildOnly: false,
  permissions: 'ADMINISTRATOR',
  async execute(message, args) {
    var pName;
    var pLink;
    var pXPath;
    await mongo.connect('mongodb+srv://bot:discord@discordbot.skes2.mongodb.net/Products', { keepAlive: 1, connectTimeoutMS: 30000, useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Successfully connected to database!');
      });
    const productSchema = new mongo.Schema({
        productName: String,
        productLink: String,
        productXPath: String,
    });
    var model = mongo.model('Product', productSchema);
    if(!args.length || args.length < 3) {
      return message.channel.send('You must include all 3 indices!');
    }
    pName = args[0];
    pLink = args[1];
    pXPath = args[2];
    var example = new model({
      productName: pName,
      productLink: pLink,
      productXPath: pXPath,
    });
    await example.save().then(() => {
      console.log('Successfully saved to database!');
    }).catch(() => {
      message.reply('Something occurred while adding this set.');
    });
    await mongo.connection.close();
    message.channel.send('Successfully added product!');
  },
};
