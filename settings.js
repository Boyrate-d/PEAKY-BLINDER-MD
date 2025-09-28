const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text && text.trim().toLowerCase() === fault.toLowerCase();
}

function stringToBool(str) {
    return str.toLowerCase() === 'true';
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || " ",

    DELETE_LINKS: stringToBool(process.env.DELETE_LINKS || "true"),

    LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

    chatbotEnabled: stringToBool(process.env.chatbotEnabled || "true"),

    PREFIX: process.env.PREFIX || ".",

    BOT_NAME: process.env.BOT_NAME || "𝑷𝑬𝑨𝑲𝒀-𝑩𝑳𝑰𝑵𝑫𝑬𝑹-𝑴𝑫 V1",

    MODE: process.env.MODE || "public",

    CUSTOM_REACT: stringToBool(process.env.CUSTOM_REACT || "false"),

    STICKER_NAME: process.env.STICKER_NAME || "✦ᴘᴇᴀᴋʏ-ʙʟɪɴᴅᴇʀ-ᴍᴅ✦",

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",

    OWNER_NUMBER: process.env.OWNER_NUMBER || "254116266407",

    OWNER_NAME: process.env.OWNER_NAME || "✦SANG LEE✦",

    lee: process.env.lee || "Sang Lee",

    DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙿𝙴𝙰𝙺𝚈-𝙱𝙻𝙸𝙽𝙳𝙴𝚁-𝙼𝙳 🇰🇪*",

    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7drn23.jpg",

    LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦𝙿𝙴𝙰𝙺𝚈-𝙱𝙻𝙸𝙽𝙳𝙴𝚁-𝙼𝙳✦ ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* https://github.com/Thomas-shelby001/PEAKY-BLINDER-MD",

    READ_MESSAGE: stringToBool(process.env.READ_MESSAGE || "false"),

    AUTO_REACT: stringToBool(process.env.AUTO_REACT || "false"),

    ANTI_BAD: stringToBool(process.env.ANTI_BAD || "false"),

    AUTO_STATUS_SEEN: stringToBool(process.env.AUTO_STATUS_SEEN || "true"),

    AUTO_STATUS_REPLY: stringToBool(process.env.AUTO_STATUS_REPLY || "false"),

    AUTO_STATUS_REACT: stringToBool(process.env.AUTO_STATUS_REACT || "true"),

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴘᴇᴀᴋʏ-ʙʟɪɴᴅᴇʀ-ᴍᴅ v1🚀🔥✦*",

    ANTI_LINK: stringToBool(process.env.ANTI_LINK || "true"),

    ANTI_BOT: stringToBool(process.env.ANTI_BOT || "true"),

    ANTI_DELETE: stringToBool(process.env.ANTI_DELETE || "true"),

    AUTO_VOICE: stringToBool(process.env.AUTO_VOICE || "false"),

    AUTO_STICKER: stringToBool(process.env.AUTO_STICKER || "false"),

    AUTO_REPLY: stringToBool(process.env.AUTO_REPLY || "false"),

    HEART_REACT: stringToBool(process.env.HEART_REACT || "false"),

    OWNER_REACT: stringToBool(process.env.OWNER_REACT || "true"),

    ALWAYS_ONLINE: stringToBool(process.env.ALWAYS_ONLINE || "true"),

    PUBLIC_MODE: stringToBool(process.env.PUBLIC_MODE || "true"),

    AUTO_TYPING: stringToBool(process.env.AUTO_TYPING || "true"),

    AUTO_RECORDING: stringToBool(process.env.AUTO_RECORDING || "false"),

    FAKE_RECORDING: stringToBool(process.env.FAKE_RECORDING || "false"),

    FAKE_TYPING: stringToBool(process.env.FAKE_TYPING || "false"),

    READ_CMD: stringToBool(process.env.READ_CMD || "false"),

    DEV: process.env.DEV || "254116266407",

    ANTI_VV: stringToBool(process.env.ANTI_VV || "true"),

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",

    CURRENT_STATUS: stringToBool(process.env.CURRENT_STATUS || "true"),

    version: process.env.version || "1.0.0",

    START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ 𝙿𝙴𝙰𝙺𝚈-𝙱𝙻𝙸𝙽𝙳𝙴𝚁-𝙼𝙳 ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

    > Joɪɴ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ (ᴀ ᴍᴜsᴛ): ⤵️  
    https://whatsapp.com/channel/0029VbAuEfj29754YgFtRf33

    > sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
    https://youtube.com/@SangLee-h2i

    - *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
    > - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

    > ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
    https://github.com/Thomas-shelby001/PEAKY-BLINDER-MD

    > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴇᴀᴋʏ-ʙʟɪɴᴅᴇʀ-ᴍᴅ`
};
