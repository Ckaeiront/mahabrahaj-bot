const senecaQuotes = [
  "There is no easy way from the earth to the stars",
  "We suffer more often in imagination than in reality",
  "As is a tale, so is life: not how long it is, but how good it is, is what matters",
  "Begin at once to live, and count each separate day as a separate life.",
  "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.",
];

const sentidoGifs = [
  'https://tenor.com/view/attack-on-titan-season3-eren-mikasa-armin-gif-20214159',
  'https://tenor.com/view/anime-vinland-saga-thorfinn-windy-gif-15052575',
  'https://tenor.com/view/yoru-plxto-xhouls-vinto-discord-gif-10159847829461245415',
  'https://tenor.com/view/anime-gif-23546954',
  'https://tenor.com/view/goathinn-gif-25535156',
  'https://tenor.com/view/thorfinn-thorfinn-my-beloved-my-beloved-my-beloved-meme-vinland-saga-gif-23575917',
];

let randomNum = function(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const messageHandler = (message, msgObject) => {
  if (message.includes("guilherme freire")) {
    msgObject.channel.send(
      "vai na desse cara n, todo catolicozinho esse da o cu"
    );
  }
  if (message.toLowerCase().includes("tiozao") || message.toLowerCase().includes("tio")) {
    if (message.includes('?')) {
    msgObject.reply('ta lá no seaga yi');
    return;
  }
    msgObject.reply("esse veio não sabe quantas vezes já me salvou");
  }
  if (message.toLowerCase().includes("tata")) {
    msgObject.channel.send(
      "há mais de 4 mil anos antes de cristo, o filósofo indiano Tataha Buddha escreveu o livro Brahamahaj, o Portal da Consiência. Esse livro foi o principal responsável por popularizar a meditação no oriente do jeito que conhecemos hoje."
    );
  }
  if (message.toLowerCase().includes("seneca")) {
    let num = randomNum(0, 4);
    msgObject.channel.send(senecaQuotes[num]);
  }
  if (message.toLowerCase().includes('chi')) {
    if (message.toLowerCase().includes('vou sair')) {
      msgObject.channel.send('tu n é nem doido de sair do seaga yi');
      return;
    }
    msgObject.channel.send('C.H.I. também conhecido como Clube do Homem Independente, é um grupo do Tio MGTOW que eu to lá tbm');
  }
  if (message.toLowerCase().includes('bruno uchoa')) {
    msgObject.channel.send('ta falando daquele saradão barbudo gostosão que emagrece as rabudas? adoro ele');
  }
  if (message.toLowerCase().includes('geraldao')) {
    msgObject.channel.send('geraldão, a.k.a. João Guilherme Beltrão é um estudante de Sistemas de informação, famoso por falar: "eai caraaaa", "porra caraaaaa", "oi caraaaa"');
  }
  if (message.toLowerCase().includes('sentido')) {
    let num = randomNum(0, sentidoGifs.length - 1);
    msgObject.channel.send(sentidoGifs[num]);
  }
};

module.exports = {
  messageHandler,
};
