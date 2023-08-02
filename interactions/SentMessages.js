const senecaQuotes = [
  "There is no easy way from the earth to the stars",
  "We suffer more often in imagination than in reality",
  "As is a tale, so is life: not how long it is, but how good it is, is what matters",
  "Begin at once to live, and count each separate day as a separate life.",
  "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.",
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
  if (message.includes("tiozao") || message.includes("tio")) {
    if (message.includes('?')) {
    msgObject.repy('ta lá no seaga yi');
    return;
  }
    msgObject.reply("esse veio não sabe quantas vezes já me salvou");
  }
  if (message.includes("tata")) {
    msgObject.channel.send(
      "há mais de 4 mil anos antes de cristo, o filósofo indiano Tataha Buddha escreveu o livro Brahamahaj, o Portal da Consiência. Esse livro foi o principal responsável por popularizar a meditação no oriente do jeito que conhecemos hoje."
    );
  }
  if (message.includes("seneca")) {
    let num = randomNum(0, 4);
    msgObject.channel.send(senecaQuotes[num]);
  }
  if (message.includes('chi')) {
    if (message.includes('vou sair')) {
      msgObject.channel.send('tu n é nem doido de sair do seaga yi');
      return;
    }
    msgObject.channel.send('C.H.I. também conhecido como Clube do Homem Independente, é um grupo do Tio MGTOW que eu to lá tbm');
  }
  if (message.includes('bruno uchoa')) {
    msgObject.channel.send('ta falando daquele saradão barbudo gostosão que emagrece as rabudas? adoro ele');
  }
  if (message.includes('geraldao')) {
    msgObject.channel.send('geraldão, a.k.a. João Guilherme Beltrão é um estudante de Sistemas de informação, famoso por falar: "eai caraaaa", "porra caraaaaa", "oi caraaaa"');
  }
};

module.exports = {
  messageHandler,
};
