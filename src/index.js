require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const moment = require('moment');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', (message) => {
    if (message.content === '!countdown') {
        const now = moment();
        const newYear = moment('2025-01-01 00:00:00');
        const diff = moment.duration(newYear.diff(now));

        const countdownMsg = `🎉 Time until 2025: **${diff.days()} days, ${diff.hours()} hours, ${diff.minutes()} minutes, and ${diff.seconds()} seconds!**`;
        message.reply(countdownMsg);
    }
});


const challenges = [
    "What's your favorite memory from 2024?",
    "Complete this riddle: I speak without a mouth, and hear without ears...",
    "What’s your New Year’s resolution?",
    "Name one thing you're grateful for this year!",
];

client.on('messageCreate', (message) => {
    if (message.content === '!challenge') {
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        message.reply(randomChallenge);
    }
});


const quotes = [
    "The best time for new beginnings is now!",
    "You are capable of amazing things!",
    "Make 2025 the year of your dreams!",
    "🌟 “Every day is a chance to rewrite your story.”",
    "🌟 “New year, new beginnings. Take the first step, no matter how small.”",
    "🌈 “Let the new year bring you closer to your dreams.”",
    "🎉 “Cheers to a year of becoming the best version of yourself.”",
    "🎉 “Life’s not about expecting, hoping, and wishing. It’s about doing, being, and becoming.”",
    "🎉 “Every end is a new beginning. Let’s make this one unforgettable!”"
];

client.on('messageCreate', (message) => {
    if (message.content === '!motivate') {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        message.reply(randomQuote);
    }
});


client.login(process.env.TOKEN);
