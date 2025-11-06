import './Carta.css'
import './imagem.css'
import Texto from './Componentes/Texto.tsx';
import Imagem from './Componentes/imagem.tsx';
import type {CartaData} from './Deck';
import Atributo from './Componentes/atributo.tsx';  
import Nivel from './Componentes/Nivel.tsx';
import Tipo from './Componentes/tipo.tsx';

export default function Carta({
    nome='Nome',
    nivel=1,
    alinhaNivel='direita',
    alinhanome='centro',
    alinhadescricao='esquerda',
    ataque=1000,
    defesa=1000,
    descricao='',
    tamanho='pequena',
    imagemUrl = '',
    corImagem = true,
    espelharImagem = false,
    girarImagem = false,
    tipo = 'Besta',
}:CartaData)
    {
    return (
        <div className="carta">
            <div className="Repartedor">

                <Texto conteudo={nome} classe='Nome' tamanho='grande' alinhamento={alinhanome} />

                <Nivel nivel={nivel} alinhaNivel={alinhaNivel} />

                <Imagem imagem={imagemUrl} espelhado={espelharImagem} colorido={corImagem} girado={girarImagem} />

                <Tipo tipo={tipo} />

                <Texto conteudo={descricao} classe='desc' tamanho={tamanho} alinhamento={alinhadescricao} />

                <Atributo tipo = "ataque" valor = {ataque}/>

                <Atributo tipo = "defesa" valor = {defesa}/>

            </div>
        </div>
    )
}