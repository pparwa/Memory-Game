//import { useState } from 'react'

import { useEffect, useState } from 'react';
import './App.css'
import CardContainer from './components/CardContainer';
  const ImageArr = [
    { src: "image/helmet-1.png", match: false },
    { src: "image/scroll-1.png", match: false },
    { src: "image/potion-1.png", match: false },
    { src: "image/shield-1.png", match: false },
    { src: "image/ring-1.png", match: false },
    { src: "image/sword-1.png", match: false },
  ];

function App() {
  const [CardS , SetCards] = useState([])
  const [ChoiceOne , setChoiceOne] = useState()
  const [ChoiceTwo, setChoiceTwo] = useState();
  const [Turns , setTurns] = useState(0)
  const handelChoice =(card)=>{
    ChoiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    
  }
 const ShuffeldCard= ()=>{
  const newArr = [...ImageArr , ...ImageArr]
const shuffeld = newArr.sort(()=>Math.random() - 0.5).map(card=>({...card ,id:Math.floor((Math.random() *1000))}))
  SetCards(shuffeld)
 }
useEffect(()=>{
if (ChoiceOne && ChoiceTwo) {
  if (ChoiceOne.src == ChoiceTwo.src) {
    const matchCards = [...CardS];
    const newcards = matchCards.map((card) => {
      if (ChoiceOne.src == card.src) {
        return { ...card, match: true };
      } else {
        return card;
      }
    });
    SetCards(newcards);
    console.log(newcards)
  } else {
    setTurns((prev) => prev + 1);
    setTimeout(() => {
      setChoiceOne(null);
      setChoiceTwo(null);
    }, 1000);
  }
}
console.log('thuk')
},[ChoiceOne , ChoiceTwo])
console.log(ChoiceOne , ChoiceTwo)
  return (
    <>
      <div className="title-box">
        <h1 className="title">Memory Card</h1>
        <button className="btn-start" onClick={ShuffeldCard}>New Game</button>
      </div>
      <CardContainer  Cards={CardS} handelChoice={handelChoice} choiceone={ChoiceOne} choicetwo={ChoiceTwo}/>
    </>
  );
}

export default App
