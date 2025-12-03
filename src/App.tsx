import './App.css'
import Carta from './Carta'
import { todasCartas } from './Deck'
import BotaoNovoDeck from './Componentes/BotaoNovoDeck'
import { useState } from 'react'
import type { CartaData } from './Deck'

function App() {

  const [decks, setDecks] = useState<CartaData[][]>([todasCartas])
  const [indiceDeck, setIndiceDeck] = useState(0)

  const deckAtual = decks[indiceDeck] || []

  function criarNovoDeck() {
    setDecks(prev => [...prev, []])
    setIndiceDeck(decks.length)
  }

  function adicionarCarta() {
    const nome = prompt('Nome da carta:', 'Nova Carta') || 'Nova Carta'
    const ataque = Number(prompt('Ataque:', '1000')) || 1000
    const defesa = Number(prompt('Defesa:', '1000')) || 1000
    const nivel = Number(prompt('Nível:', '1')) || 1

    const novaCarta: CartaData = {
      serial: Date.now(),
      nome,
      ataque,
      defesa,
      nivel,
      descricao: '',
      imagemUrl: '',
      tipo: 'Besta',
    }

    setDecks(prev =>
      prev.map((d, i) => i === indiceDeck ? [...d, novaCarta] : d)
    )
  }

  function nextDeck() {
    setIndiceDeck(i => (i + 1) % decks.length)
  }

  function prevDeck() {
    setIndiceDeck(i => (i - 1 + decks.length) % decks.length)
  }

  return (
    <>
      <header className="titulo">
        <h1>CardMaker</h1>
      </header>

      <div className="topo-controles">
        <button className="nav-seta" onClick={prevDeck}>⟨⟨</button>

        <h2 className="titulo-deck">
          Deck {indiceDeck + 1} / {decks.length}
        </h2>

        <button className="nav-seta" onClick={nextDeck}>⟩⟩</button>

        <BotaoNovoDeck onClick={criarNovoDeck} />
        <button className="btn-adicionar" onClick={adicionarCarta}>+ Carta</button>
      </div>

      <div className='ListaCartas'>

        {deckAtual.length === 0 ? (
          <div className="deck-vazio" onClick={adicionarCarta}>
            <div className="deck-vazio-icone">🃏</div>
            <p className="deck-vazio-texto">Deck vazio: clique para adicionar uma carta</p>
          </div>
        ) : (
          deckAtual.map((carta) => (
            <Carta 
              key={carta.serial}
              {...carta}
            />
          ))
        )}

      </div>
    </>
  )
}

export default App
