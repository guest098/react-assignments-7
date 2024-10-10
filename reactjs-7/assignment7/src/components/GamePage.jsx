import React,{useState,useEffect } from 'react';
import Card from './Card';
import './GamePage.css';
const generateCards=()=>{
  const numbers=Array.from({length:8},(_,i)=>i+1);
  const cards=[...numbers,...numbers];
  return shuffle(cards.map(value=>({value,id:Math.random()})));
};
const shuffle=(array)=>{
  return array.sort(()=>Math.random()-0.5);
};
const GamePage=()=>{
  const [cards,setCards]=useState(generateCards());
  const [flippedCards,setFlippedCards]=useState([]);
  const [matchedCards,setMatchedCards]=useState([]);
  const [isChecking,setIsChecking]=useState(false);
  const [moves,setMoves]=useState(0);
  const [time,setTime]=useState(0);
  const [bestScore,setBestScore]=useState(localStorage.getItem('bestScore')||null);
  useEffect(()=>{
    if(matchedCards.length===cards.length&&time>0){
      if(!bestScore||time<bestScore){
        setBestScore(time);
        localStorage.setItem('bestScore',time);
      }
    }
  },[matchedCards,time,cards.length,bestScore]);
  useEffect(()=>{
    let interval=null;
    if (matchedCards.length<cards.length){
      interval=setInterval(()=>{
        setTime(prevTime=>prevTime+1);
      },1000);
    } 
    else{
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
  },[matchedCards,cards.length]);
  const handleClick=(card)=>{
    if(isChecking||flippedCards.includes(card)||matchedCards.includes(card)) return;
    setFlippedCards(prev=>[...prev,card]);
    if(flippedCards.length===1){
      setIsChecking(true);
      setTimeout(()=>{
        checkMatch(flippedCards[0],card);
      },1000);
    }
  };
  const checkMatch=(firstCard,secondCard)=>{
    if(firstCard.value===secondCard.value){
      setMatchedCards([...matchedCards,firstCard,secondCard]);
    }
    setFlippedCards([]);
    setIsChecking(false);
    setMoves(moves+1);
  };
  return (
    <div className="game-page">
      <h1>Memory Game</h1>
      <div className="grid">
        {cards.map(card=>(
          <Card 
            key={card.id} 
            card={card} 
            handleClick={handleClick} 
            isFlipped={flippedCards.includes(card)} 
            isMatched={matchedCards.includes(card)} 
          />
        ))}
      </div>
      {matchedCards.length===cards.length&&(
        <div className='results'>
          <p className='results1'>Time:{time}s</p>
          {bestScore&&<p>Best Score:{bestScore}s</p>}
          <h2>Game Over!<br/>Total moves:{moves}</h2>
        </div>
      )}
    </div>
  );
};

export default GamePage;
