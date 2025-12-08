import type { ChangeEvent} from 'react';
import { useState } from 'react';
import type { Elemento } from './interfaces.tsx';
import EditorInputs from './EditorInputs.tsx';
import '../Estilos/EditorPainel.css';

interface EditorPanelProps {
  elementoAtivo?: Elemento;
  onAtualizaElemento: (id: number, chave: string, valor: string | number) => void;
  onAddElemento: (tipo: 'texto' | 'imagem') => void;
  apagarElemento: (id: number) => void;
}


export default function EditorPanel({ elementoAtivo, onAtualizaElemento, onAddElemento, apagarElemento}: EditorPanelProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  
  const SelecionaElemento = (e: ChangeEvent<HTMLInputElement>) => 
  {
    const { name, value } = e.target;
    if (elementoAtivo) {
      onAtualizaElemento(elementoAtivo.id, name, value);
    }
  };

  const adicionarElemento = (tipo: 'texto' | 'imagem') => {
    onAddElemento(tipo);
    setMenuAberto(false);
  };

  return (
    <div className="editor-painel">

      <button 
        className="adicionarEditor" 
        onClick={() => setMenuAberto(!menuAberto)}
        title="Adicionar elemento"
      >
      +
      </button>

      {menuAberto && (
        <div className="menuAdicionar">
          <button onClick={() => adicionarElemento('texto')}>📝 Adicionar Texto</button>
          <button onClick={() => adicionarElemento('imagem')}>🖼️ Adicionar Imagem</button>
        </div>
      )}

      {elementoAtivo && <EditorInputs elemento={elementoAtivo} atualizarElemento={SelecionaElemento} apagarElemento={apagarElemento} />}
    </div>
  );
}