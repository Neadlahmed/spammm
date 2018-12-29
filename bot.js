const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`سبحان الله والحمد لله ولااله الا الله
 سبحان الله والحمد لله ولااله الا الله
 سبحان الله والحمد لله ولااله الا الله
 `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!ninja_elarab') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 70000; x++) {
        message.channel.send(`*سبحان الله والحمد لله ولااله الا الله
 سبحان الله والحمد لله ولااله الا الله
 سبحان الله والحمد لله ولااله الا الله
 سبحان الله والحمد لله ولااله الا الله
بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيمبسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم
 sb7an allah sb7an allah **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!ninja_elarab') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 70000; x++) {
        message.channel.send(`** - بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم بسم الله الرحمن الرحيم  **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message',function(message) {
    let prefix = البرفلكس";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**[ ${args} ]**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});


client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
