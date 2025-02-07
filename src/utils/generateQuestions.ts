const allTruthOrLie = [
  'Amo café mais do que qualquer outra bebida.',
  'Prefiro séries a filmes.',
  'Gosto mais do dia do que da noite.',
  'Sou viciada(o) em doces.',
  'Prefiro um abraço sincero a um elogio bonito.',
  'Já comprei algo só porque achei fofo.',
  'Ficaria sem celular por um dia se tivesse boa companhia.',
  'Tenho um lado romântico que poucos conhecem.',
  'Prefiro presentes que tenham significado a algo caro.',
  'Amo quando alguém lembra dos meus pequenos gostos.',
  'Adoro viajar para lugares novos.',
  'Me sinto mais feliz quando estou cercado(a) por quem gosto.',
  'Tenho um jeito particular de demonstrar carinho.',
  'Sou o tipo de pessoa que presta atenção nos detalhes.',
  'Um jantar feito por alguém especial me conquista mais do que um restaurante chique.',
  'Prefiro receber carinho físico a mensagens fofas.',
  'Amo conversas profundas sobre a vida.',
  'Gosto de pessoas que demonstram carinho sem precisar de datas especiais.',
  'Prefiro ganhar algo feito à mão do que algo comprado em uma loja.',
  'Meu jeito de demonstrar amor é diferente do jeito que gosto de receber amor.',
];

const allHaveOrNever = [
  'Já tomei uma decisão só pelo coração.',
  'Jamais sairia sem perfume.',
  'Já mudei de ideia sobre algo importante.',
  'Já recebi um elogio que mudou meu dia.',
  'Jamais recuso um convite para algo divertido.',
  'Já fiz um esforço extra para ver alguém sorrir.',
  'Já enviei uma mensagem fofa do nada para alguém.',
  'Jamais dormiria sem desejar boa noite a quem gosto.',
  'Já passei uma noite inteira conversando com alguém especial.',
  'Já fui surpreendido(a) de uma forma incrível.',
  'Jamais conseguiria viver sem momentos de carinho.',
  'Já me emocionei com um pequeno gesto de alguém.',
  'Já planejei algo especial só para fazer outra pessoa feliz.',
  'Já me senti completamente entendido(a) por alguém.',
  'Jamais ficaria sem dar carinho a quem eu gosto.',
  'Já fiz algo inesperado para demonstrar carinho.',
  'Já entendi que amor não se mede em palavras, mas em gestos.',
  'Já tive um momento inesquecível só por estar com a pessoa certa.',
];

const allOpenEnded = [
  // 🌍 Viagens e Lugares dos Sonhos
  'Se eu pudesse viajar para qualquer lugar do mundo, escolheria...',
  'O destino dos meus sonhos para uma viagem inesquecível é...',
  'Se eu pudesse morar em qualquer cidade ou país, moraria em...',
  'Um lugar que sempre sonhei conhecer, mas ainda não tive a oportunidade é...',
  'Se eu tivesse um mês de férias totalmente pago, eu iria para...',
  'Se eu pudesse escolher entre uma praia paradisíaca, uma cidade histórica ou uma aventura na neve, eu escolheria...',
  'O que mais me atrai em um novo destino de viagem é...',
  'Se eu pudesse fazer uma road trip sem destino certo, gostaria de passar por...',
  'Uma cultura que sempre me fascinou e gostaria de conhecer melhor é...',
  'O que não pode faltar na minha viagem perfeita?',

  // 💭 Sonhos e Planos para o Futuro
  'Se eu pudesse realizar um grande sonho agora, seria...',
  'Uma coisa que eu sempre quis fazer, mas ainda não tive coragem, é...',
  'Se dinheiro não fosse um problema, eu investiria meu tempo e energia em...',
  'Uma experiência única que quero viver pelo menos uma vez na vida é...',
  'Se eu pudesse escolher qualquer profissão no mundo sem me preocupar com dinheiro, eu seria...',
  'Algo que eu adoraria realizar nos próximos cinco anos é...',
  'Se eu pudesse escolher um dia perfeito, ele incluiria...',

  // 🌟 Experiências Inesquecíveis
  'Uma experiência que me faria extremamente feliz seria...',
  'Uma experiência nova que eu adoraria ter é...',
  'Uma experiência emocionante que sempre sonhei viver é...',
  'Se eu pudesse viver uma aventura radical sem medo, escolheria...',
  'Se eu tivesse um passe livre para qualquer evento do mundo, escolheria...',
  'Se eu pudesse ter um jantar especial com qualquer pessoa no mundo, escolheria...',
  'Se eu pudesse viver um grande momento de cinema na vida real, seria...',

  // 🎭 Momentos que Marcaram
  'Se eu pudesse voltar no tempo e dar um conselho para mim mesmo(a), eu diria...',
  'Se eu pudesse escolher um dia para reviver e sentir tudo de novo, seria...',
  'Um pequeno momento que mudou minha perspectiva sobre a vida foi...',
  'Se eu tivesse que definir minha vida em um título de livro, seria...',

  // ❤️ Felicidade e Conexões
  'O que me faz sentir verdadeiramente feliz é...',
  'Algo pequeno, mas que me faz sentir amado(a), é...',
  'Se eu pudesse criar um momento perfeito para compartilhar com alguém especial, seria...',
  'Uma coisa que me faz sorrir imediatamente é...',
  'Se eu tivesse que descrever a sensação de estar plenamente feliz, seria...',
  'Se eu pudesse guardar um sentimento em um potinho para sempre, seria...',
];

const allMultipleChoice = [
  {
    question: 'Se eu fosse um super-herói, meu superpoder inútil seria...',
    options: [
      'Poder abrir pacotes de salgadinho sem rasgar errado',
      'Falar com pombos, mas eles só me xingam',
      'Ficar invisível, mas só quando ninguém está olhando',
      'Voar, mas só 10 cm acima do chão',
    ],
  },
  {
    question: 'Se eu tivesse que escolher um pet exótico, seria...',
    options: [
      'Uma capivara de estimação',
      'Um urso panda hiperativo',
      'Um gato que sempre me julga',
      'Uma tartaruga ninja aposentada',
    ],
  },
  {
    question: 'Se minha vida fosse um reality show, o nome seria...',
    options: [
      "'Dormindo e Comendo: O Documentário'",
      '‘Meu Deus, Que Vergonha’',
      '‘Manual de Como Se Meter em Problemas’',
      '‘Cadê Meu Celular?’',
    ],
  },
  {
    question: 'Se eu fosse um meme famoso, qual seria?',
    options: [
      "'Confused Math Lady' tentando entender tudo",
      "'Shrek olhando desconfiado'",
      "'O bebê chorando e depois rindo'",
      "'O cachorro piscando devagar'",
    ],
  },
  {
    question:
      'Se eu tivesse que comer uma comida estranha para sempre, escolheria...',
    options: [
      'Sorvete de feijão',
      'Pizza de brigadeiro com queijo',
      'Milkshake de bacon',
      'Sushi de coxinha',
    ],
  },
  {
    question: 'Se eu me perdesse no shopping, o que eu faria?',
    options: [
      'Ficaria parado esperando o resgate',
      "Pegaria o microfone e anunciaria 'me perdi!'",
      'Entraria na loja mais cara fingindo ser milionário(a)',
      'Abria um mapa e fingia ser explorador(a)',
    ],
  },
  {
    question: 'Se eu pudesse viver em um desenho animado, qual escolheria?',
    options: [
      'Bob Esponja para morar na Fenda do Biquíni',
      'Pokémon para ter um Pikachu de estimação',
      'Os Simpsons para não envelhecer nunca',
      'Scooby-Doo para investigar mistérios',
    ],
  },
  {
    question:
      'Se eu tivesse que usar apenas uma roupa pelo resto da vida, seria...',
    options: [
      'Pijama de unicórnio',
      'Terno e gravata 24h por dia',
      'Roupa inflável de dinossauro',
      'Fantasia de banana',
    ],
  },
  {
    question: 'Se um gênio me concedesse um desejo inútil, eu pediria...',
    options: [
      'Sempre saber onde está meu carregador',
      'Nunca mais pisar em Lego descalço',
      'Ter um sinal de Wi-Fi perfeito, mas só no banheiro',
      'Poder ver no escuro, mas só quando tem luz',
    ],
  },
  {
    question:
      'Se eu pudesse transformar um objeto aleatório em comida, escolheria...',
    options: [
      'Controle remoto que vira brigadeiro',
      'Chinelo que vira hambúrguer',
      'Travesseiro que vira pizza',
      'Computador que vira milkshake',
    ],
  },
  {
    question: 'Se minha risada tivesse um efeito sonoro, seria...',
    options: [
      'Buzina de palhaço',
      'Som de uma cabra berrando',
      'Efeito de explosão de filme de ação',
      'Risada maléfica de vilão de novela',
    ],
  },
  {
    question: 'Se eu fosse criar um novo emoji, seria...',
    options: [
      'Um tomate chorando',
      'Uma lhama confusa',
      'Um cachorro julgando suas escolhas',
      'Uma capivara com óculos escuros',
    ],
  },
  {
    question: 'Se eu tivesse que fazer um cosplay ridículo, escolheria...',
    options: [
      'Abacaxi gigante',
      'Pato de borracha',
      'Salsicha do Scooby-Doo',
      'Biscoito da Sorte Humano',
    ],
  },
  {
    question: 'Se eu tivesse que trocar meu nome por algo engraçado, seria...',
    options: [
      'Zé Bolacha',
      'Capivara Supersônica',
      'Dona Fofoca',
      'Picles Espacial',
    ],
  },
  {
    question: 'Se eu fosse um sabor de sorvete bizarro, seria...',
    options: [
      'Sorvete de lasanha',
      'Sorvete de coxinha',
      'Sorvete de pipoca com caramelo',
      'Sorvete de pão de alho',
    ],
  },
  {
    question: 'Se um alienígena me abduzisse, minha primeira pergunta seria...',
    options: [
      "'Tem Wi-Fi na nave?'",
      "'Vocês aceitam PIX?'",
      "'O que vocês fazem com os gados que somem?'",
      "'Vocês vieram me buscar para a escola de Hogwarts alienígena?'",
    ],
  },
  {
    question: 'Se eu pudesse viajar no tempo, para onde iria?',
    options: [
      'Para o futuro e ver se o bolo de aniversário flutua',
      'Para os anos 80 só para usar ombreiras exageradas',
      'Para a Idade Média e ensinar cavaleiros a jogar videogame',
      'Para 10 segundos atrás porque esqueci o que ia fazer',
    ],
  },
  {
    question:
      'Se eu fosse um vilão de desenho animado, meu plano maligno seria...',
    options: [
      'Transformar toda comida do mundo em sorvete',
      'Fazer com que segunda-feira tenha 48 horas',
      'Roubar todos os chinelos do planeta',
      'Trocar todas as senhas de Wi-Fi por enigmas impossíveis',
    ],
  },
  {
    question:
      'Se eu fosse um animal não convencional de estimação, escolheria...',
    options: [
      'Um camaleão fashionista',
      'Um porco que canta ópera',
      'Uma capivara que joga videogame',
      'Uma tartaruga que corre maratonas',
    ],
  },
  {
    question:
      'Se eu pudesse adicionar uma regra estranha à sociedade, seria...',
    options: [
      'Toda reunião teria que começar com uma batalha de dancinha',
      'Feriado toda quarta-feira só porque sim',
      'A pizza obrigatoriamente teria que vir com borda recheada',
      'Multa para quem andar devagar na escada rolante',
    ],
  },

  {
    question: 'Se eu pudesse escolher um encontro ideal, seria...',
    options: [
      'Jantar romântico',
      'Viagem inesperada',
      'Filme em casa',
      'Passeio ao ar livre',
      'Algo espontâneo',
    ],
  },
  {
    question: 'Eu me sinto mais amado(a) quando...',
    options: [
      'Recebo carinho físico',
      'Ouvimos palavras gentis',
      'Alguém faz algo por mim',
      'Passamos tempo juntos',
      'Recebo um presente especial',
    ],
  },
  {
    question: 'Minha comida favorita para um jantar especial é...',
    options: [
      'Massas',
      'Frutos do mar',
      'Comida caseira',
      'Churrasco',
      'Japonesa',
    ],
  },
  {
    question: 'Prefiro passar meu tempo livre...',
    options: [
      'Lendo um livro',
      'Assistindo séries',
      'Fazendo algo ao ar livre',
      'Cozinhando',
      'Com amigos/família',
    ],
  },
  {
    question: 'Se pudesse receber um presente agora, escolheria...',
    options: [
      'Algo feito à mão',
      'Um jantar surpresa',
      'Uma viagem',
      'Uma carta escrita à mão',
      'Um objeto que eu amo',
    ],
  },
  {
    question: 'Prefiro que me demonstrem carinho através de...',
    options: [
      'Palavras gentis',
      'Pequenos gestos',
      'Tempo de qualidade',
      'Surpresas',
      'Carinho físico',
    ],
  },
  {
    question: 'O melhor jeito de terminar o dia é...',
    options: [
      'Assistindo algo legal',
      'Tomando um banho relaxante',
      'Fazendo algo criativo',
      'Conversando com alguém especial',
      'Dormindo cedo',
    ],
  },
  {
    question: 'Se eu pudesse ganhar um presente agora, escolheria...',
    options: [
      'Um chocolate',
      'Uma joia',
      'Um bilhete fofo',
      'Algo útil',
      'Flores',
    ],
  },
];

const allFunnyQuestions = [
  'Se eu fosse um lanche, qual seria? Hambúrguer, pastel ou coxinha?',
  'Já tentei colar na escola e falhei miseravelmente.',
  'Se minha vida fosse um filme de comédia, qual seria o título?',
  'Qual superpoder inútil eu teria? Voar 10cm do chão, ver no escuro só quando já tem luz, ou entender tudo que um cachorro diz mas não poder responder?',
  'Se eu tivesse que escolher entre comer só comida salgada ou só doce para sempre, o que eu escolheria?',
  'Qual foi a coisa mais sem sentido que já acreditei quando era criança?',
  'Se eu fosse um personagem de desenho animado, qual seria?',
  "Já dei 'tchau' para alguém e percebi que a pessoa não estava falando comigo?",
  'Se eu tivesse que trocar meu nome por um nome engraçado, qual seria?',
  'Se um dia eu me perdesse no shopping, o que eu faria primeiro? A) Entrar numa loja e fingir que trabalho lá, B) Pegar um microfone e me anunciar, C) Sentar e aceitar o destino.',
  'Já chorei de rir em um momento em que não podia rir?',
  'Se eu pudesse apagar uma vergonha que passei, qual seria?',
  'Se eu fosse um pastel de feira, qual seria o meu recheio?',
  'Qual foi o pior presente que eu já recebi?',
  'Se eu tivesse que viver em um único aplicativo de celular, qual seria? WhatsApp, Instagram ou YouTube?',
  'Se eu fosse dar um nome para um sapo de estimação, qual seria?',
  'Já entrei num cômodo e esqueci completamente o que fui fazer lá?',
  'Se eu pudesse fazer qualquer coisa sem ninguém julgar, o que seria?',
  'Já levei um susto de algo completamente idiota?',
  'Se minha risada tivesse um efeito sonoro engraçado, qual seria?',
  'Se eu tivesse que usar uma fantasia ridícula por um dia inteiro, qual eu escolheria?',
  'Se eu fosse uma comida, qual seria a minha maior qualidade e meu maior defeito?',
  'Se eu tivesse que virar um animal por um dia, qual seria e por quê?',
  'Qual foi a coisa mais aleatória que já aconteceu comigo?',
  'Se eu fosse um filtro de Instagram, qual seria?',
  'Se eu tivesse que trocar de vida com um personagem de novela por um dia, quem seria?',
  'Se um alienígena me sequestrasse, qual seria a primeira coisa que eu perguntaria?',
  'Se eu só pudesse assistir UM filme para o resto da vida, qual seria?',
  'Se eu pudesse adicionar um feriado absurdo no calendário, qual seria e o que faríamos nele?',
  'Se minha vida fosse um reality show, qual seria o nome?',
  'Se eu tivesse que cantar uma música no karaokê sem errar NENHUMA palavra, qual seria?',
  'Já tentei falar outra língua e saiu tudo errado?',
  'Se eu tivesse que me descrever com o nome de um emoji, qual seria?',
  'Se eu ganhasse um milhão de reais, mas tivesse que gastá-lo em 24h, o que eu compraria?',
  'Se eu tivesse que escolher entre nunca mais comer chocolate ou nunca mais ver séries, o que eu escolheria?',
  'Qual foi a coisa mais besta que já me fez rir por horas?',
  'Se eu tivesse um talk show, quem seria meu primeiro convidado?',
  'Se eu fosse um sorvete, qual sabor seria?',
  'Se eu fosse um comercial de TV, qual seria meu bordão?',
  'Se eu pudesse trocar de lugar com um famoso por um dia, quem seria e por quê?',
  'Se minha vida tivesse uma trilha sonora, qual música tocaria quando eu entro num lugar?',
  'Se eu pudesse ser o mestre em qualquer habilidade inútil, qual escolheria?',
  'Se eu tivesse que ser um personagem de um desenho animado, qual eu seria?',
  'Se eu tivesse que comer a mesma comida todos os dias por um ano, qual seria?',
  'Se eu só pudesse usar uma única cor de roupa para sempre, qual cor escolheria?',
  'Se um gênio me desse um desejo, mas só valesse para coisas bobas, o que eu pediria?',
  'Se eu pudesse inventar um novo emoji, como ele seria?',
  'Se eu pudesse morar dentro de um jogo de videogame, qual seria?',
  'Se eu fosse criar um nome de Wi-Fi engraçado, qual seria?',
  'Se eu fosse um sabor de pizza, qual seria?',
  'Se eu só pudesse usar uma palavra para o resto da vida, qual escolheria?',
  'Se eu fosse um fantasma e pudesse assustar uma pessoa por um dia, quem seria?',
  'Se eu tivesse que viver dentro de um filme de comédia, qual escolheria?',
  'Se eu pudesse ter um botão que fizesse qualquer coisa, o que ele faria?',
];

export const generateRandomQuestions = () => {
  const truthOrLie = [...allTruthOrLie]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  const haveOrNever = [...allHaveOrNever]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  const openEnded = [...allOpenEnded]
    .sort(() => Math.random() - 0.5)
    .slice(0, 7);
  const multipleChoice = [...allMultipleChoice]
    .sort(() => Math.random() - 0.5)
    .slice(0, 18);
  const funnyQuestions = [...allFunnyQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5); // 🔹 Adicionando 5 perguntas engraçadas

  return { truthOrLie, haveOrNever, openEnded, multipleChoice, funnyQuestions };
};
