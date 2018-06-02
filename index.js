let TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
let token = '';
// Включить опрос сервера
let bot = new TelegramBot(token, {polling: true});

// Добавляем команду hello + "*"
bot.onText(/hello (.+)/, function (msg, match) {
    let userId = msg.from.id;

    bot.sendMessage(userId, 'Hello, my love! I am your ' + match[1] + '!');
});

// Добавляем команду hello + "*"
bot.onText(/(.+)/, function (msg, match) {
    let userId = msg.from.id;

    bot.sendMessage(userId, 'Please write me "hello + my name"');
});
