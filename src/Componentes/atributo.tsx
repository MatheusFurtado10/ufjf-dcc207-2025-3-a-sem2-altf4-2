import { useState } from "react";

interface AtributoProps {
    tipo: string;
    valor: number;
}

export default function Atributo({
    tipo = '',
    valor = 0,
}: AtributoProps) {

    // Estado interno baseado no valor inicial da carta
    const [valorAtual, setValorAtual] = useState(valor);

    // Função igual à lógica do slide do professor
    function aumentarValor() {
        setValorAtual((v) => {
            // você pode trocar o limite depois (professor usa 5)
            if (v >= 5000) {
                return 0;
            }
            return v + 500; // aumenta 500 por clique (ajuste como quiser)
        });
    }

    const estilos: React.CSSProperties = {
        fontSize: 'clamp(5px, 1vw , 11px)',
        cursor: 'pointer',
        userSelect: 'none'
    };

    return (
        <div 
            className={`${tipo}`}
            style={estilos}
            onClick={aumentarValor}   // <-- botão invisível embutido
            title="Clique para aumentar"
        >
            <span style={{ fontWeight: '700' }}>
                {tipo === 'ataque' ? 'ATK/' :
                 tipo === 'defesa' ? 'DEF/' : ''}
            </span> 

            <span style={estilos}>{valorAtual}</span>
        </div>
    );
}
