import React from 'react'

import Panel from './Panel'
import Board from './Board'
import Card from './Card'

const App = () => {
  const handleNewGame = () => {
    console.log('new game')
    // cards.isFlipped = false
  }
  return (
    <div className="container">
      <Panel handleNewGame={handleNewGame}/>
      <Board />
    </div>
  )
}

export default App
