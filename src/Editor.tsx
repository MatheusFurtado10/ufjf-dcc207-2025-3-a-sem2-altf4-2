//Mostra a Carta a ser editada, utiliza o EditorPainel para isso

export interface EditorProps {
    defineTela: (tela: 'inicial' | 'editor') => void;
}

export default function Editor({defineTela}: EditorProps) {
    return (    
        <div className="editor">
            <h2>Editor de Cartas</h2>
            <button onClick={()=>defineTela("inicial")}>Voltar</button>
        </div>);
}