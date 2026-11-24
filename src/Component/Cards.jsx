import Card from "./Card.jsx"
import { useState } from 'react';
const Cards = ({Data}) => {
  const[State , setState] = useState(0);  
  let Datalength = Data.length
  return (
    <div >
      {
        <Card {...Data[State]} State = {State} setState = {setState} Datalength = {Datalength}/>
      }
    </div>
  )
}

export default Cards
