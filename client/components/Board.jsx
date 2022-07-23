// import { restart } from 'nodemon';
import React, {useState} from 'react';
import images from '../Data/images';
import Panel from './Panel'

function Board() {


  const testCardArray = [
    {isFlipped: false, code: 1, card: 1, image: 'bender.png'},
    {isFlipped: false, code: 2, card: 2, image: 'dont-starve.png'},
    {isFlipped: false, code: 3, card: 3, image: 'finn.png'},
    {isFlipped: false, code: 4, card: 4, image: 'flash.png'},
    {isFlipped: false, code: 5, card: 5, image: 'goku.png'},
    {isFlipped: false, code: 6, card: 6, image: 'homer.png'},
    {isFlipped: false, code: 7, card: 7, image: 'jake.png'},
    {isFlipped: false, code: 8, card: 8, image: 'mario.png'},
    {isFlipped: false, code: 9, card: 9, image: 'r2d2.png'},
    {isFlipped: false, code: 10, card: 10, image: 'superman.png'},
    {isFlipped: false, code: 1, card: 11, image: 'bender.png'},
    {isFlipped: false, code: 2, card: 12, image: 'dont-starve.png'},
    {isFlipped: false, code: 3, card: 13, image: 'finn.png'},
    {isFlipped: false, code: 4, card: 14, image: 'flash.png'},
    {isFlipped: false, code: 5, card: 15, image: 'goku.png'},
    {isFlipped: false, code: 6, card: 16, image: 'homer.png'},
    {isFlipped: false, code: 7, card: 17, image: 'jake.png'},
    {isFlipped: false, code: 8, card: 18, image: 'mario.png'},
    {isFlipped: false, code: 9, card: 19, image: 'r2d2.png'},
    {isFlipped: false, code: 10, card: 20, image: 'superman.png'}
  ]
  const [cards, setCards] = useState(testCardArray)
  
  // array of cards currently flipped
  const [prevCard, setPrevCard] = useState({isFlipped: false, code: 0, card: 1, image: 'bender.png'})

  const handleCardClick = (event, index) => {
    const cardNumber = Number(index)
    let flip = true
    if (cards[cardNumber].isFlipped === true) flip = false

    setCards(cards.map((card, i) => {
      if (i === cardNumber) {
        setPrevCard({...card})
        return {
          ...card, isFlipped: flip
        }
      } else {
        return card
      }
    }))
    
    console.log(prevCard)
      
    if(prevCard.code === cards[cardNumber].code) console.log("It's a match")
    
    
  };

  

  return (
    <div className="board">
      {cards.map((card, index) => {
        let style = `tile${index} tile`
        if (!card.isFlipped) {
          style += ` notFlipped`
        } else {
          style += ' flipped'
        }
        return (
        <div key={index} onClick={(evt) => {handleCardClick(evt, index)}} className={style}>
          {card.isFlipped && <img src={`images/${card.image}`} alt={card.code} />} 
        </div>
        )
      })}
    </div>
  )
}


export default Board