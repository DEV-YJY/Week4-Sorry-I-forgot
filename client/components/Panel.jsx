import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Panel(props) {
  return (
    <div className='panel'>
      <Header />
      <p>Timer: 00:00</p>
      <p>High Score</p>
      <p>Score:</p>
      <p>Board Size</p>
      <button onClick={() => {props.handleNewGame()}}>New Game</button>
      <Footer />
    </div>
  )
}



export default Panel