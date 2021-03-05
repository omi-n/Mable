const mongo = require('mongoose');
const productSchema = new mongo.Schema({
    productName: String,
    productLink: String,
    productXPath: String,
});

module.exports = {
  name: 'addp',
  guildOnly: false,
  permissions: 'ADMINISTRATOR',
  async execute(message, args) {
    var pName;
    var pLink;
    var pXPath = '//*[@id="price_inside_buybox"]';
    var model = mongo.model('Product', productSchema);
    if(!args.length || args.length < 2) {
      return message.channel.send('You must include at least 2 indices!');
    }
    pName = args[0];
    pLink = args[1];
    if(args.length == 3) {
      pXPath = args[2];
    }
    const example = new model({
      productName: pName,
      productLink: pLink,
      productXPath: pXPath,
    });
    await example.save().then(() => {
      console.log('Successfully saved to database!');
    }).catch(() => {
      message.reply('Something occurred while adding this set.');
    });
    message.channel.send('Successfully added product!');
  },
};
