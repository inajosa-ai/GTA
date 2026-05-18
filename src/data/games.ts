export interface GameInfo {
  id: string;
  title: string;
  releaseDate: string;
  city: string;
  protagonists: string;
  platforms: string;
  coverImage: string;
  heroImage: string;
  logo: string;
  gallery: string[];
  description: string;
  story: string;
  missions: number | string;
  gameplayTime: string;
  achievements: number | string;
  hardestMission: string;
  revenue: string;
  curiosities: string[];
  color: string;
}

export const games: GameInfo[] = [
  {
    id: "gta-1",
    title: "Grand Theft Auto",
    releaseDate: "28 de Novembro de 1997",
    city: "Liberty City, San Andreas, Vice City",
    protagonists: "Bubba, Divine, Katie, Kivlov, Mikki, Travis, Troy, Ulrika",
    platforms: "PC, PS1, Game Boy Color",
    coverImage: "/games/gta1.jpg",
    heroImage: "/games/gta1.jpg",
    logo: "/logos/gta1.jpeg",
    gallery: ["/games/gta1.jpg", "/games/gta1.jpg", "/games/gta1.jpg"],
    description: "Onde tudo começou. O primeiro Grand Theft Auto introduziu o mundo à perspectiva top-down, missões de crime aberto e o caos que definiria uma das franquias mais icônicas da história dos videogames.",
    story: "Você assume o papel de um criminoso trabalhando para gangues locais nas três cidades principais do jogo: Liberty City, San Andreas e Vice City. Não há uma narrativa linear profunda, mas sim a busca por pontos através de crimes, roubos de carros e missões pagas para subir no submundo.",
    missions: "+200",
    gameplayTime: "15-20 Horas",
    achievements: "N/A",
    hardestMission: "N/A",
    revenue: "Desconhecido",
    curiosities: [
      "Foi originalmente concebido como um jogo de corrida chamado 'Race'n'Chase' onde o jogador controlaria a polícia.",
      "As três cidades originais (Liberty City, Vice City, San Andreas) reapareceriam como os maiores ícones da franquia em 3D.",
      "A liberdade do mapa aberto foi acidental, vindo de um bug na inteligência artificial."
    ],
    color: "#ffcc00"
  },
  {
    id: "gta-2",
    title: "Grand Theft Auto 2",
    releaseDate: "22 de Outubro de 1999",
    city: "Anywhere City",
    protagonists: "Claude Speed",
    platforms: "PC, PS1, Dreamcast, Game Boy Color",
    coverImage: "/games/gta2.jpg",
    heroImage: "/games/gta2.jpg",
    logo: "/logos/gta2.jpeg",
    gallery: ["/games/gta2.jpg", "/games/gta2.jpg", "/games/gta2.jpg"],
    description: "Elevando o caos da visão aérea. GTA 2 se passa numa cidade retro-futurista e trouxe inovações táticas como o sistema de respeito com gangues rivais.",
    story: "Claude Speed é introduzido em Anywhere City, uma metrópole distópica dividida por sete gangues diferentes, incluindo a Yakuza, Zaibatsu e os Russian Mob. O jogador deve ganhar ou perder respeito trabalhando para elas para dominar os setores.",
    missions: 60,
    gameplayTime: "16-25 Horas",
    achievements: "N/A",
    hardestMission: "Mad Bomber",
    revenue: "Desconhecido",
    curiosities: [
      "É o único GTA da saga principal a ter classificação 'T' para Teen no GBC (versões console foram Mature).",
      "Existe um curta-metragem live-action de 8 minutos feito para promover o jogo.",
      "O sistema de respeito por gangues (trabalhar para uma gangue faz as rivais te odiarem) foi uma revolução na época."
    ],
    color: "#d90000"
  },
  {
    id: "gta-3",
    title: "Grand Theft Auto III",
    releaseDate: "22 de Outubro de 2001",
    city: "Liberty City",
    protagonists: "Claude",
    platforms: "PS2, Xbox, PC, Mobile",
    coverImage: "/games/gta3.jpg",
    heroImage: "/games/gta3.jpg",
    logo: "/logos/gta3.jpeg",
    gallery: ["/games/gta3.jpg", "/games/gta3.jpg", "/games/gta3.jpg"],
    description: "A revolução 3D. GTA III mudou a indústria dos jogos para sempre com Liberty City em três dimensões, estabelecendo o padrão moderno para jogos de mundo aberto.",
    story: "Traído e deixado para morrer por sua parceira de crime Catalina durante um assalto, o silencioso Claude busca vingança no impiedoso submundo de Liberty City, trabalhando para máfias italianas, a Yakuza e corruptos para chegar até sua ex-parceira.",
    missions: 73,
    gameplayTime: "15-20 Horas",
    achievements: 29,
    hardestMission: "Espresso-2-Go!",
    revenue: "$250 Milhões (Aprox.)",
    curiosities: [
      "Claude não diz uma única palavra durante todo o jogo. Ele é mudo.",
      "Lançado semanas após os ataques de 11 de setembro, sofrendo alterações como a cor dos carros policiais de Nova York.",
      "O jogo quebrou vários recodes da indústria para a época, popularizando o gênero sandbox 3D."
    ],
    color: "#4a4a4a"
  },
  {
    id: "gta-vice-city",
    title: "Grand Theft Auto: Vice City",
    releaseDate: "29 de Outubro de 2002",
    city: "Vice City",
    protagonists: "Tommy Vercetti",
    platforms: "PS2, Xbox, PC, Mobile",
    coverImage: "/games/gtavc.jpg",
    heroImage: "/games/gtavc.jpg",
    logo: "/logos/vicecity.jpeg",
    gallery: ["/games/gtavc.jpg", "/games/gtavc.jpg", "/games/gtavc.jpg"],
    description: "Bem-vindo aos anos 80. Vice City mergulha em luzes neon, músicas marcantes e os esquemas da era glamourosa da Flórida, fortemente inspirado por Scarface e Miami Vice.",
    story: "Tommy Vercetti, um assassino da máfia liberado da prisão, é enviado a Vice City. Após uma negociação dar errado, Tommy fica sem nada e inicia uma escalada sangrenta no submundo do crime para tomar o poder e se tornar o imperador da cidade.",
    missions: 87,
    gameplayTime: "18-25 Horas",
    achievements: 34,
    hardestMission: "Demolition Man",
    revenue: "$500 Milhões (Aprox.)",
    curiosities: [
      "No jogo, as motos e a capacidade de trocar roupas foram grandes inovações na franquia.",
      "D Ray Liotta foi o dublador de Tommy. Foi a primeira vez que um GTA usou superestrelas de Hollywood.",
      "Vice City completou seu desenvolvimento em impressionantes 9 meses após GTA III."
    ],
    color: "#ff00a0"
  },
  {
    id: "gta-san-andreas",
    title: "Grand Theft Auto: San Andreas",
    releaseDate: "26 de Outubro de 2004",
    city: "Los Santos, San Fierro, Las Venturas",
    protagonists: "Carl 'CJ' Johnson",
    platforms: "PS2, Xbox, PC, Mobile, PS3, Xbox 360",
    coverImage: "/games/gtasa.jpg",
    heroImage: "/games/gtasa.jpg",
    logo: "/logos/sanandreas.jpeg",
    gallery: ["/games/gtasa.jpg", "/games/gtasa.jpg", "/games/gtasa.jpg"],
    description: "Um estado inteiro para explorar. San Andreas introduziu customização profunda do personagem, guerras de gangues, guerra por territórios e um mapa colossal.",
    story: "Abolindo a vida longe de casa após o assassinato de sua mãe, CJ retorna a Los Santos. Imediatamente enquadrado por policiais corruptos por um homicídio que não cometeu, CJ embarca em uma odisseia épica por todo o estado para salvar sua família.",
    missions: 100,
    gameplayTime: "30-50 Horas",
    achievements: 33,
    hardestMission: "Wrong Side of the Tracks",
    revenue: "$1 Bilhão (Aprox.)",
    curiosities: [
      "O sistema de nutrição permitia que CJ engordasse ou ficasse musculoso dependendo do que comesse e treinos.",
      "É o jogo mais vendido de todos os tempos do console PlayStation 2.",
      "Tamanho de mapa revolucionário, com desertos, montanhas e três capitais massivas conectadas."
    ],
    color: "#e6b053"
  },
  {
    id: "gta-iv",
    title: "Grand Theft Auto IV",
    releaseDate: "29 de Abril de 2008",
    city: "Liberty City",
    protagonists: "Niko Bellic",
    platforms: "PS3, Xbox 360, PC",
    coverImage: "/games/gta4.jpg",
    heroImage: "/games/gta4.jpg",
    logo: "/logos/gta4.jpeg",
    gallery: ["/games/gta4.jpg", "/games/gta4.jpg", "/games/gta4.jpg"],
    description: "Uma nova era em alta definição. O que era um arcade caótico virou um drama sombrio e maduro em uma versão visceral e realista de Nova York.",
    story: "Atraído pelo 'sonho americano' que o primo Roman mencionava nas cartas, Niko Bellic, veterano de guerra no leste europeu, chega a Liberty City. Ao invés de riqueza, ele encontra agiotas, mafiosos e a cruel realidade da cidade, sendo forçado a recair na violência.",
    missions: 88,
    gameplayTime: "30-50 Horas",
    achievements: 50,
    hardestMission: "Three Leaf Clover",
    revenue: "$2 Bilhões (Aprox.)",
    curiosities: [
      "O motor de física Euphoria revolucionou as reações de NPCs a tiros, colisões e tropeços de forma procedural.",
      "O jogo foi aclamado pela sua história dramática, recebendo pontuações perfeitas em quase todos reviews.",
      "Roman Bellic e as ligações recorrentes convidando Niko para boliche se tornaram o maior meme do jogo."
    ],
    color: "#6b7280"
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    releaseDate: "17 de Setembro de 2013",
    city: "Los Santos & Condado de Blaine",
    protagonists: "Michael De Santa, Franklin Clinton, Trevor Philips",
    platforms: "PS3, Xbox 360, PS4, Xbox One, PC, PS5, Xbox Series X/S",
    coverImage: "/games/gta5.jpg",
    heroImage: "/games/gta5.jpg",
    logo: "/logos/gta5.jpeg",
    gallery: ["/games/gta5.jpg", "/games/gta5.jpg", "/games/gta5.jpg"],
    description: "Três criminosos interligados em uma metrópole solar assombrada pela sátira do entretenimento americano. Um estrondoso sucesso de crítica e vendas.",
    story: "No ensolarado caldeirão de Los Santos, o ex-assaltante de banco Michael finge sua morte; o gangbanger Franklin busca subir de vida; o maniático Trevor constrói um império no deserto. Seus caminhos colidem para os maiores golpes já realizados, batendo de frente com agências corruptas.",
    missions: 69,
    gameplayTime: "30-60 Horas",
    achievements: 77,
    hardestMission: "The Big Score",
    revenue: "$8.5 Bilhões+",
    curiosities: [
      "GTA V é atualmente o segundo jogo mais vendido do mundo em toda a história.",
      "Introduziu a tecnologia de troca instantânea entre três protagonistas de forma fluida a qualquer instante.",
      "O componente online, GTA Online, criou uma economia de bilhões de dólares contínua que atua até hoje."
    ],
    color: "#5f914d"
  },
  {
    id: "gta-vi",
    title: "Grand Theft Auto VI",
    releaseDate: "Anunciado para 2025",
    city: "Estado de Leonida (incluindo Vice City)",
    protagonists: "Lucia & Jason",
    platforms: "PS5, Xbox Series X/S",
    coverImage: "/games/gta6.jpg",
    heroImage: "/games/gta6.jpg",
    logo: "/logos/gta6.jpeg",
    gallery: ["/games/gta6.jpg", "/games/gta6.jpg", "/games/gta6.jpg"],
    description: "A aguardada evolução. Retornando ao estado banhado a neon de Leonida, com as ruas imersas no pantanal vívido do próximo capítulo do mundo aberto da Rockstar.",
    story: "Pelo que foi divulgado oficialmente, focará numa narrativa no estilo 'Bonnie e Clyde' no mundo hiper-conectado inspirado no lifestyle maluco da Flórida atual, com Lucia e seu parceiro num arco de crimes e submissão à adrenalina do lucro rápido.",
    missions: "-",
    gameplayTime: "TBA",
    achievements: "-",
    hardestMission: "-",
    revenue: "TBA",
    curiosities: [
      "O trailer revelação rapidamente bateu recordes absolutos do YouTube, atingindo mais de 93 milhões de visualizações em 24h.",
      "A canção do trailer 'Love Is a Long Road' de Tom Petty teve aumentos de stream superiores a 36.000%.",
      "Será a primeira vez que a série apresenta uma protagonista mulher jogável no universo HD."
    ],
    color: "#8a2be2"
  }
];

