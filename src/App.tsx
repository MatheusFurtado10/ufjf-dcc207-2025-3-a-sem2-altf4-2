import './App.css'
import { useState } from 'react'
import Inicial from './Inicial.tsx'
import Editor from './Editor.tsx'
import type { Cartas, Elemento, Baralho} from './Componentes/interfaces.tsx';


function App() {
  const[tela, defineTela] = useState<'inicial' | 'editor'>('inicial');
  const[cartasSalvas,defineCartasSalvas] = useState<Cartas[]>([]);
  const[elementos, defineElementos] = useState<Elemento[]>([]);
  const[baralhosSalvos, defineBaralhosSalvos] = useState<Baralho[]>([]);

  const ModificarElementos= (id: number, chave: string, valor: string | number) => 
  {
    defineElementos(prev => prev.map(element => element.id === id? {...element, [chave]: valor} : element));
  }

  return (
    <div className="app">
      <header className='header'>
        <h1 className='titulo'>Meu TCG</h1>
      </header>
    
    {tela === 'inicial' ?(
      <Inicial baralhosSalvos={baralhosSalvos} defineTela={defineTela} />
    ) : (
      <Editor defineTela={defineTela} />
    )}
      <footer className="footer">
        <p>CardMaker 2025.</p>
      </footer>

    </div>
  )
}

export default App
