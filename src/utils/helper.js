var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

const liveChatMessages = [
    "Hey everyone! 👋",
    "Let's gooo!! 🚀",
    "Who's watching this in 2025? 😂",
    "This stream is fire 🔥🔥",
    "Bro, this is crazy!",
    "Shoutout from India! 🇮🇳",
    "First time here, love the vibe!",
    "Who's hyped for this? 🙌",
    "Mods sleeping? 😴",
    "Don't spam, guys!",
    "LMAO that was hilarious 🤣",
    "Can someone explain what's happening?",
    "Big fan from Brazil! 🇧🇷",
    "What song is playing?",
    "OMG, I can't believe this!",
    "Can we get an F in the chat?",
    "SHEEEEEESH 🔥🔥🔥",
    "This chat is wild 😭",
    "Stop spamming, bro!",
    "Who's still here?",
    "Wait, what just happened?!",
    "Let's get this to 1M views!",
    "Mods, do your job! 😡",
    "This stream is lagging for me 😢",
    "LOL, that was unexpected!",
    "Chat is moving too fast! 😵",
    "Best stream ever!!!",
    "Who's been here since the start?",
    "OMG, they actually did it!",
    "Drop a like if you're enjoying!",
    "The nostalgia is real 😭",
    "We need a part 2!",
    "Why is this so funny? 😂",
    "Turn up the volume! 🔊",
    "I've been waiting for this!!",
    "Super chat gang where you at?",
    "That was so clean 👌",
    "Subscribe if you haven't already!",
    "Bro, this is legendary!",
    "Who else is vibing? 🎶",
    "Spam W in the chat! 🏆",
    "This chat is insane right now!",
    "Not me watching this at 3 AM 😂",
    "Wait, did anyone see that?!",
    "Let's get some hype in the chat!!",
    "Chat, what do you think about this?",
    "Where is everyone watching from?",
    "Did he just say what I think he did?!",
    "Can someone clip that? 🤣",
    "OMG, that was unexpected!",
    "This feels like a movie! 🍿",
    "I can't stop laughing! 🤣",
    "Who's rewatching this later?",
    "How long is this stream?",
    "No way that just happened!",
    "Loving the energy here! 🔥",
    "This chat is faster than my internet 💀",
    "Can we appreciate the effort here?",
    "Who’s here from TikTok? 😆",
    "Bruh moment fr 💀",
    "The memes are going to be wild!",
    "I wasn't ready for that 😂",
    "GG well played! 🎮",
    "Wait, what did he just say?!",
    "Love from the Philippines! 🇵🇭",
    "Bro, I'm in tears rn 😭",
    "Who else is watching in 144p? 😂",
    "Someone make this a meme!",
    "The suspense is killing me!",
    "The comments are funnier than the video 😂",
    "Liking the stream before even watching!",
    "Let's get this trending! 🔥",
    "WHO ELSE IS HERE FROM REDDIT?",
    "Bro this reminds me of old YouTube vibes!",
    "Super chat flexers where you at?",
    "Let's goooo W in the chat!",
    "This is actually insane!",
    "Best livestream of the year!",
    "If you're reading this, you're a legend! 💯",
    "Bro, I need a replay button ASAP!",
    "Chat, should I donate? 🤔",
    "Bruh, that's mad sus 💀",
    "Everyone hit the like button NOW!",
    "I'm just here for the comments 😂",
    "That transition was smooth! 👏",
    "Clip this right now!!",
    "Who's watching from school? 😂",
    "This is why I love YouTube Live!",
    "Holy, that was sick! 🤯",
    "Okay, I wasn't expecting that!",
    "Biggest plot twist ever!",
    "My brain can't handle this 😵",
    "Bro, that timing was perfect!",
    "This is actually peak entertainment!",
    "I need to show this to my friends!",
    "Finally, someone said it!",
    "Bro just ended the internet 💀",
    "This chat is straight-up chaos 😂",
    "Wait, how did that even happen?",
    "Legendary moment right here!",
    "I’m subscribing just for this!",
    "Chat going crazy rn!! 🔥",
    "We all witnessed history today!"
];

export function getRandomSentence() {
    return liveChatMessages[Math.floor(Math.random() * liveChatMessages.length)];
}

export function getRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

export const formatTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return interval === 1 ? `${interval} ${unit} ago` : `${interval} ${unit}s ago`;
        }
    }
    return 'just now';
};