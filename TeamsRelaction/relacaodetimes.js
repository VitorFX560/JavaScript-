// Lista de jogadores do Barcelona
const jogadoresBarcelona = [
  {
    nome: "Marc-André ter Stegen",
    posicao: "Goleiro",
    numero: 1
  },
  {
    nome: "Sergi Roberto",
    posicao: "Lateral Direito",
    numero: 20
  },
  {
    nome: "Gerard Piqué",
    posicao: "Zagueiro",
    numero: 3
  },
  {
    nome: "Jordi Alba",
    posicao: "Lateral Esquerdo",
    numero: 18
  },
  {
    nome: "Sergio Busquets",
    posicao: "Volante",
    numero: 5
  },
  {
    nome: "Frenkie de Jong",
    posicao: "Meio-campo",
    numero: 21
  },
  {
    nome: "Lionel Messi",
    posicao: "Atacante",
    numero: 10
  },
  {
    nome: "Antoine Griezmann",
    posicao: "Atacante",
    numero: 17
  },
  {
    nome: "Ansu Fati",
    posicao: "Atacante",
    numero: 22
  }
];

// Exibir a lista de jogadores
jogadoresBarcelona.forEach(jogador => {
  console.log(`Nome: ${jogador.nome}, Posição: ${jogador.posicao}, Número: ${jogador.numero}`);
});
