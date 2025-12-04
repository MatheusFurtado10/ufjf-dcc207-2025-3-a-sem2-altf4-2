import Canva from "./Canva";
import "../Estilos/Carta.css";
import type { Elemento } from "./interfaces";

interface CartaComponenteProps {
    elementos: Elemento[];
    elementoSelecionada: (id:number)=>void;
}  

export default function Carta({elementos, elementoSelecionada}:CartaComponenteProps) {
    return (
        <div className="carta">
            <Canva elementos={elementos} selecionada={elementoSelecionada} />
        </div>
    );
}