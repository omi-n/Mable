# This project is NO LONGER being worked on.
## A new discord bot will be made with less awful code.


Mable is a work-in-progress discord bot made for my personal use.

If you want to use it, go right ahead. Just host it yourself.


You can do this by:

1. going to the [discord developer portal](https://discord.com/developers/)

2. create application

3. add bot

4. copy the token

5. paste the token and a prefix you want into a new file in the same directory as main.js called `config.json`

6. go to discord developers [permissions calculator](https://discordapi.com/permissions.html)

7. manage permissions as needed (admin if you're lazy)
      - I would suggest only picking out of the white text ones.

8. invite

9. install [nodeJS](https://nodejs.org/en/) and run `npm install`


## Features


```
help: brings up a list of bot commands

avatar: displays a user's avatar

prefix: used for testing the bot

pingspam: (requires admin) spam pings a user

kick: (requires kick permissions) kicks a user from the guild

ban: (requires ban permissions) bans a user from the guild

unban: (requires ban permissions) (requires USERID) unbans a user from the guild

newchannel: (requires create_channel perms) creates a new channel

delchannel: (requires delete_channel perms) deletes an existing channel

price: (WIP) fetches price for a certain item in the database (may not work!)

addp: (WIP) adds an item to the tracked items database (may not work!)

```


