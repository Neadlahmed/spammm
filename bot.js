const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['537243479923752980'];
const prefix = ['!'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x <150000; x++) {
        message.channel.send(`**  لا تبندووني واللله اني صادق بسبح ربنا مش سباام سبحان الله سبحان الله الله اكبر الله اكبر سبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبر لا تبندووني واللله اني صادق بسبح ربنا مش سباام سبحان الله سبحان الله الله اكبر الله اكبر سبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبر no baan it's spam t's good very good no baan  **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@286088294234718209>')
    }
});

client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 150000; x++) {
        message.channel.send(`** - no baan it's spam t's good very good no baan لا تبندووني واللله اني صادق بسبح ربنا لا تبندووني واللله اني صادق بسبح ربنا مش سباام سبحان الله سبحان الله الله اكبر الله اكبر سبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبر  مش سباام سبحان الله سبحان الله الله اكبر الله اكبر سبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبرسبحان الله سبحان الله الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
