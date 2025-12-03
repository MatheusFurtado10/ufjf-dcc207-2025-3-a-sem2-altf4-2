//tela inicial onde são mostradas todas as cartas, se houver, no baralho. Ao selecionar alguma, muda para a tela do editor
import type {Baralho} from './Componentes/interfaces.tsx';

interface InicialProps {
    baralhosSalvos: Baralho[];
    defineTela: (tela: 'inicial' | 'editor') => void;
}

export default function Inicial({baralhosSalvos, defineTela}: InicialProps) {
    return (    
        <div className="inicial">
            <h2>Seu Baralho!</h2>
            <button onClick={() => defineTela('editor')}>Criar Nova Carta</button>
        </div>);
}