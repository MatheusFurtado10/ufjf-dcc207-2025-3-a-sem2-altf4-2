import "/.Carta.css";
import Canva from "./Componentes/Canva";

interface Elementos{
    id:number,
    tipo:'texto' | 'imagem',
    posicaoVertical:number,
    posicaoHorizontal:number,
    conteudo:string,
    cor:string,
    tamanho:number,
    largura?:number,
    altura?:number
}

interface CartaComponenteProps {
    elementos: Elementos[];
    cartaSelecionada: (id:number)=>void;
}  

export default function Carta({elementos, cartaSelecionada}:CartaComponenteProps) {
    return (
        <div className="carta-container">
            <Canva elementos={elementos} selecionada={cartaSelecionada} />
        </div>
    );
}