export interface Protagonist {
  id: string;
  name: string;
  game: string;
  image: string;
  bio: string;
  personality: string;
  curiosities: string[];
  quote: string;
  color: string;
}

export const protagonists: Protagonist[] = [
  {
    id: "lucia",
    name: "Lucia",
    game: "GTA VI",
    image: "/protagonists/lucia.jpg", 
    bio: "Uma das duas protagonistas de GTA VI. Lucia aparente ser uma criminosa determinada, recém-saída do sistema prisional, pronta para reconquistar Leonida.",
    personality: "Destemida, pragmática, leal ao seu parceiro.",
    curiosities: ["Primeira mulher protagonista em 3D/HD.", "Usa tornozeleira eletrônica na arte oficial."],
    quote: "A única maneira de passarmos por isso é permanecendo juntos. Sendo uma equipe.",
    color: "#ff007f",
  },
  {
    id: "jason",
    name: "Jason",
    game: "GTA VI",
    image: "/protagonists/jason.jpg", 
    bio: "O parceiro de Lucia nas ruas perigosas de Leonida. Um sobrevivente nato e parceiro no crime.",
    personality: "Calmo, focado, calculista sob pressão.",
    curiosities: ["Aparenta ter origens no interior de Leonida.", "Sua dinâmica com Lucia lembra Bonnie e Clyde."],
    quote: "Sim. Confiança.",
    color: "#ff7f00",
  },
  {
    id: "trevor",
    name: "Trevor Philips",
    game: "GTA V",
    image: "/protagonists/trevor.jpg",
    bio: "Ex-piloto, sociopata e cofundador da Trevor Philips Enterprises. Vive em Sandy Shores.",
    personality: "Caótico, extremamente violento, imprevisível, mas surpreendentemente muito leal a quem ama.",
    curiosities: ["Ele tem uma tatuagem de 'Cortar Aqui' no pescoço.", "Nasceu no Canadá.", "Quase nunca dorme."],
    quote: "Do you want me to get my dick out again?!",
    color: "#f08d3c",
  },
  {
    id: "franklin",
    name: "Franklin Clinton",
    game: "GTA V",
    image: "/protagonists/franklin.jpg",
    bio: "Jovem ambicioso de Los Santos, buscando sair da vida das gangues trabalhando na recuperação de carros.",
    personality: "Calmo sob pressão, leal, procura sempre aprender algo novo.",
    curiosities: ["Sua habilidade especial abranda o tempo enquanto dirige.", "Dono do famoso rottweiler Chop."],
    quote: "Look homie, you basically just said a whole bunch of bullshit.",
    color: "#5f914d",
  },
  {
    id: "michael",
    name: "Michael De Santa",
    game: "GTA V",
    image: "/protagonists/michael.jpg",
    bio: "Assaltante de bancos aposentado vivendo em uma mansão financiada pela impunidade, preso numa crise familiar.",
    personality: "Amargurado, sarcástico, mas um mentor genial.",
    curiosities: ["Fã incondicional do cinema clássico de Vinewood.", "Suas missões em Ludendorff são as mais icônicas."],
    quote: "You forget a thousand things every day, pal. Make sure this is one of 'em.",
    color: "#5fa3eb",
  },
  {
    id: "niko",
    name: "Niko Bellic",
    game: "GTA IV",
    image: "/protagonists/niko.jpg",
    bio: "Veterano de guerra da Europa Oriental que chega a Liberty City atraído pelas mentiras do primo Roman.",
    personality: "Sombrio, prático, protetor da família e não tolera desrespeito.",
    curiosities: ["Uma das narrativas mais complexas já criadas pela Rockstar.", "Ele serve The Perestroika e o submundo russo."],
    quote: "War is where the young and stupid are tricked by the old and bitter into killing each other.",
    color: "#6b7280",
  },
  {
    id: "cj",
    name: "Carl Johnson (CJ)",
    game: "GTA San Andreas",
    image: "/protagonists/cj.jpg",
    bio: "Membro da Grove Street Families, retorna a LS após sua mãe ser brutalmente assassinada em um drive-by.",
    personality: "Muito mais sensível que seus pares, mas letal aos seus inimigos.",
    curiosities: ["Primeiro protagonista que muda de porte físico conforme alimentado/treinado.", "Pode pilotar desde bicicletas a caças militares hydra."],
    quote: "Ah shit, here we go again.",
    color: "#166534",
  },
  {
    id: "tommy",
    name: "Tommy Vercetti",
    game: "GTA Vice City",
    image: "/protagonists/tommy.jpg",
    bio: "Poderoso ex-soldado da máfia de Liberty City, enviado para a ensolarada Vice City após anos na prisão.",
    personality: "Iracundo, líder natural, o verdadeiro Scarface do mundo dos games.",
    curiosities: ["Voz original do ator Ray Liotta.", "Não sabia nadar, afundava como uma pedra na água."],
    quote: "Tommy Vercetti... Remember the name!",
    color: "#ff00a0",
  },
  {
    id: "claude",
    name: "Claude",
    game: "GTA III",
    image: "/protagonists/claude.jpg",
    bio: "Criminoso traído por Catalina durante um roubo a banco, escapa a caminho da penitenciária.",
    personality: "Silencioso, brutal e segue ordens de qualquer um que pague bem.",
    curiosities: ["Silencioso para representar o próprio jogador em 2001.", "Sua aparição 'muda' em San Andreas gerou memes duradouros."],
    quote: "...",
    color: "#374151",
  }
];
