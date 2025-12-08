import '../Estilos/EditorOpcoes.css';

interface EditorOpcoesProps
{
    cartaId: number| null;
    salvarCarta: () =>void;
    apagarCarta: () =>void;
    duplicarCarta: () =>void;
}
export default function EditorOpcoes({cartaId, salvarCarta, apagarCarta, duplicarCarta}: EditorOpcoesProps)
{
    return (
        <div className="editor-opcoes">
            {cartaId === null ? (<button className='salvar-btn' onClick={salvarCarta}>💾 Salvar Carta</button>): (<button onClick={salvarCarta} className='salvar-btn' >🗃️ Salvar Alteração</button>)}
            <button onClick={duplicarCarta} className='duplicar-btn'> 🗐 Duplicar Carta</button>
            <button onClick={apagarCarta} className='apagar-btn'>✖ Apagar Carta</button>
        </div>
    );
}