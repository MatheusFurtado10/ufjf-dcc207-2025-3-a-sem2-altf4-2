import SamuraiImg from './assets/template/samurai.png';

export interface CartaData {
  serial?: number;
  nome?: string;
  nivel?: number;
  alinhaNivel?: 'esquerda' | 'direita' | 'centro';
  ataque?: number;
  defesa?: number;
  descricao?: string;
  imagemUrl?: string;
  tamanho?: 'pequena' | 'media' | 'grande';
  alinhanome?: 'esquerda' | 'centro' | 'direita';
  alinhadescricao?: 'esquerda' | 'centro' | 'direita';
  espelharImagem?: boolean;
  corImagem?: boolean;
  girarImagem?: boolean;
}

export const todasCartas: CartaData[] = [
  {
    serial: 1,
    nome: 'Godfrey',
    nivel: 4,
    ataque: 8000,
    defesa: 1500,
    alinhaNivel: 'centro',
    descricao: 'O primeiro Lorde Pristino.',
    imagemUrl: `${SamuraiImg}`,
  },
  {
    serial: 2,
    nome: 'Malenia',
    nivel: 6,
    ataque: 4000,
    defesa: 7000,
    descricao: 'A espada de Miquella',
    tamanho: 'media',
    alinhanome: 'esquerda',
    alinhadescricao: 'direita',
    imagemUrl: `${SamuraiImg}`,
    corImagem: false,
    girarImagem: true,
  },
  {
    serial: 3,
    nome: 'Radahn',
    ataque: 3500,
    defesa: 2000,
    nivel: 14,
    alinhaNivel: 'esquerda',
    tamanho: 'grande',
    alinhanome: 'centro',
    alinhadescricao: 'centro',
    descricao: 'O General Estelar, conquistador das estrelas',
    imagemUrl: `${SamuraiImg}`,
    espelharImagem: true,
  },
  {
    serial: 4,
    nome: 'Morgott',
    ataque: 2500,
    defesa: 1800,
    tamanho: 'pequena',
    descricao: 'O Rei Agouro',
    imagemUrl: `${SamuraiImg}`,
    corImagem: false,
  },
];