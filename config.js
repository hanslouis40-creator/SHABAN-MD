boy  fs = rre('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1lelBvZDMrVFNzSGVYaU1jc01HVWpoUTRZYjFld3luVXRBa0p3OFZVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibG5xeG05UWxoTCtKQk9qQmZScWJSaTB2NjhacnpxRmt3RFkrS3ozM3RqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSXpOb25IditzUkkrQ2RzSzZ5WDY0b2YvQmlFdGJlaE9GZFptQnVBUEZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYU0NrWVlaVWNCalhaQ0NNUzlQanE0TTEvbDlQNlYwVVpQSVpTMW9LUUY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Oc3VsTkdES0F6d2g0K2FWbGtDYmFuQ29ENmQvUnUydldFQzQ5VFpwVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCWURydGdLYXBRcWN3M0Z5RUFOMW1KRkJLb3ZJTTNwbmpzSHlPOC9VQ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hrU3NmcStkVWdsL1BuNHdvYyswZXc0SHE0SnNPWlJ5dG1pa2lhYVNWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzFhQWlra1BoSTMrOWRPK2pEUDNQclJYdGp5OHEzNkd4K2JnOHo0TFV6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRHaGhHekhMQXp2MU95VEJBNjE5U3EvcXdQQ2syeThRMEI3VE5oL0tLdEYrTG94aCtKUEphN0diL29OQlM3UU9TallvTGZXaFRRODA2ZkhMcmpTZmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJuV1RWbXN4QjlhQVZVSGExYW9QRTRleWkza01XcHlkRHJ4aTlLOVFaODFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI5QkZGWU1ORiIsIm1lIjp7ImlkIjoiNTA5MzUwNDIwNDM6NzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RsPCdkbsn8J2RuiDwnZG98J2RrPCdkbXwnZG64oaS8J2RtfCdkavwnZGoIiwibGlkIjoiMzY1NDY0OTc1MTk4MjQ6NzRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWGEzNW9FRU1ibzNNVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzb21iT1gveEptME14SDJqczczbjBnY2liSG1TeFlja0oxTEtJOVRldjBzPSIsImFjY291bnRTaWduYXR1cmUiOiJLWWkyejBzWUp0bDdibmRGY1FmS1NOZjI3b3VuK1hka2ZSNGFsQTJiZE5TTTdKTFBiaEFSZnpYN1NqcFdUb0lmT2hnSTdDbDYvNzJsNmpYcmlNT3VEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidWFJdnpwcm5sR2tyazZxdk9mVFBYbTU0QzJNNDV3S3lORW5xQjN6NXFZQXcwQmVuZEswUkZTTzNydnZCdU5DUUlDK3ZTVW94WGJPMkRpWXFtNUc5alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNTA0MjA0Mzo3NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNkptemwvOFNadERNUjlvN085NTlJSElteDVrc1dISkNkU3lpUFUzcjlMIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY4MzY5MzYsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDWnQifQ==",
// add your SessSession
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || "•",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
