module.exports = {
  name: 'price',
  guildOnly: false,
  async execute(message, args, puppet) {
    const URL = 'a';
    const browser = await puppet.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    const [el] = await page.$x('');
    const src = await el.getProperty('textContent');
    const srcTxt = await src.jsonValue();

    message.channel.send(srcTxt);
    browser.close();
  },
};
