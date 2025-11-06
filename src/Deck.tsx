import SamuraiImg from './assets/template/samurai.png';

export interface CartaData {
  nome: string;
  ataque: number;
  defesa: number;
  descricao?: string;
  imagemUrl?: string;
  tamanho?: 'pequena' | 'media' | 'grande';
  alinhanome?: 'esquerda' | 'centro' | 'direita';
  alinhadescricao?: 'esquerda' | 'centro' | 'direita';
  espelharImagem?: boolean;
  corImagem?: boolean;
}

export const todasCartas: CartaData[] = [
  {
    nome: 'Godfrey',
    ataque: 2000,
    defesa: 1500,
    descricao: 'O primeiro Lorde Pristino.',
    imagemUrl: `${SamuraiImg}`,
  },
  {
    nome: 'Malenia',
    ataque: 4000,
    defesa: 700,
    descricao: 'A espada de Miquella',
    tamanho: 'media',
    alinhanome: 'esquerda',
    alinhadescricao: 'direita',
    imagemUrl: '',
  },
  {
    nome: 'Radahn',
    ataque: 3500,
    defesa: 2000,
    descricao: 'O General Estelar, conquistador das estrelas',
    imagemUrl: '',
    espelharImagem: true,
  },
  {
    nome: 'Morgott',
    ataque: 2500,
    defesa: 1800,
    descricao: 'O Rei Agouro',
    imagemUrl: '',
    corImagem: false,
  },
];