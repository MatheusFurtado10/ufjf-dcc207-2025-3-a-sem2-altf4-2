import './Carta.css'

type CartaProps = {
    nome: string;
    ataque: number;
    defesa: number;
    descricao: string;
}//Dependendo do tempo, tira a descrição

function Carta({nome,ataque,defesa,descricao}: CartaProps){
    return (
        <div className="carta">
            <div className="verso">
            {/*se possivel fazer interação de ao clicar mostrar a capa da carta*/}
            </div>
            <div className="frente">
                <div className='Nome'>{nome}</div>
                <div className='desc'>{descricao}</div>
                <div className='ataque'>{ataque}</div>
                <div className='defesa'>{defesa}</div>
            </div>
        </div>
    )
}

export default Carta;