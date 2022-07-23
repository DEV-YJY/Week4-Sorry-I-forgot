import React from 'react'
import images from '../Data/images'


function Card() {
  
  const handleClick = () => {
    handleChoice(card)
    // onclick the state of each card will change from ('display: false' to 'true') 
  }
  // As a user I want to see the cards displayed

  // As a user I want to click the cards and view them

  // As a user 

  // GO TO APP OR BOARD

  //const [card, setCard] = useState
  //const [card1, setCard1] = useState
  //const [card2, setCard2] = useState

  //const handleChoice = (card) => {
  //card1 ? setCard2(card) : setCard1(card)
  //}

  // const params = useParams()
  // const imagesArr = images
  // const image = image[id].image

  return (
    <div>
      <img src={`/images/${images[0].img}`} alt="frontside" /> 
      <img src={`/images/${images[0].img}`} alt="backside" onClick={handleClick} />
    </div>
  )
}

export default Card