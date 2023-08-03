const senecaQuotes = [
  "There is no easy way from the earth to the stars",
  "We suffer more often in imagination than in reality",
  "As is a tale, so is life: not how long it is, but how good it is, is what matters",
  "Begin at once to live, and count each separate day as a separate life.",
  "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.",
];

const sentidoGifs = [
  "https://tenor.com/view/attack-on-titan-season3-eren-mikasa-armin-gif-20214159",
  "https://tenor.com/view/anime-vinland-saga-thorfinn-windy-gif-15052575",
  "https://tenor.com/view/yoru-plxto-xhouls-vinto-discord-gif-10159847829461245415",
  "https://tenor.com/view/anime-gif-23546954",
  "https://tenor.com/view/goathinn-gif-25535156",
  "https://tenor.com/view/thorfinn-thorfinn-my-beloved-my-beloved-my-beloved-meme-vinland-saga-gif-23575917",
];

let randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

let num;

const allowedMessages = [
  {
    message: "guilherme freire",
    response: "esse bixo ai visse, todo cristãozino afe",
  },
  {
    message: "tio",
    response: "esse veio não sabe quantas vezes já me salvou",
  },
  {
    message: "tata",
    response:
      "há mais de 4 mil anos antes de cristo, o filósofo indiano Tataha Buddha escreveu o livro Brahamahaj, o Portal da Consiência.",
  },
  {
    message: "seneca",
    response: function (num) {
      return `${senecaQuotes[num]}`;
    },
    randomMessage: true,
    msgArray: senecaQuotes,
  },
  {
    message: "chi",
    response:
      "C.H.I. também conhecido como Clube do Homem Independente, é um grupo do Tio MGTOW que eu to lá tbm",
  },
  {
    message: "bruno uchoa",
    response:
      "ta falando daquele saradão barbudo gostosão que emagrece as rabudas? adoro ele",
  },
  {
    message: "geraldao",
    response:
      'geraldão, a.k.a. João Guilherme Beltrão é um estudante de Sistemas de informação, famoso por falar: "eai caraaaa", "porra caraaaaa", "oi caraaaa"',
  },
  {
    message: "sentido",
    response: function (num) {
      return `${sentidoGifs[num]}`;
    },
    randomMessage: true,
    msgArray: sentidoGifs,
  },
  {
    message: "anthrodynia",
    response: "é momozinho ou é momozão",
  },
  {
    message: "quando eu te vejo",
    response: "passar por mim",
  },
  {
    message: "feio",
    response: "feio é tu cara de tatu",
  },
  {
    message: "talita",
    response: "é tata, visse",
  },
];

const handleMessageRefactored = (message, msgObj) => {
  const msg = message.toLowerCase();
  let objMessage;

  for (let i = 0; i < allowedMessages.length; i++) {
    if (allowedMessages[i].message === msg) objMessage = allowedMessages[i];
  }

  try {
    if (objMessage.response === undefined || objMessage.response === "") {
      return false;
    } else if (objMessage.randomMessage === true) {
      num = randomNum(0, objMessage.msgArray.length);
      msgObj.channel.send(objMessage.response(num));
    } else {
      msgObj.channel.send(objMessage.response);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  handleMessageRefactored,
};
