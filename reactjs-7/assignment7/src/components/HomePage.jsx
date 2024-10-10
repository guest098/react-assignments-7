import React from "react";
import {Link} from 'react-router-dom';
import './HomePage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTachometerAlt,faStar,faPlayCircle} from '@fortawesome/free-solid-svg-icons';
const Home=()=>{
    const bestScore=localStorage.getItem('bestScore');
    return (
        <div className="home-page">
            <h1>Memory Game</h1>
            <div className="score-container">
                <p className="best-time">Best Time:&nbsp;{bestScore?`${bestScore}Secs`:'0'}</p>
            </div>
            <Link to='/game' className="play-button">
            <FontAwesomeIcon icon={faPlayCircle} size="1x" /> Let's Play Game
            </Link>
            <div className="details">
                <h2>How to Play</h2>
                <p>
                Welcome to the Memory Game! Your objective is to match all the pairs of cards.Each turn, you can flip over two cards. If they match, they will be removed from the board.If not, they will flip back over. Try to match all pairs in the least amount of moves and in the shortest time possible to set a new best score.</p>
            </div>
            <div className="game-tips">
                <h3>Game Tips</h3>
                <ul>
                <li><FontAwesomeIcon icon={faTachometerAlt} size="1.5x"/>&nbsp;&nbsp;Pay attention to the cards' positions.</li>
                <li><FontAwesomeIcon icon={faStar} size="1.5x"/>&nbsp;&nbsp;Try to remember the positions of the cards you flipped.</li>
                <li><FontAwesomeIcon icon={faPlayCircle} size="1.5x"/>&nbsp;&nbsp;Keep practicing to improve your score!</li>
                </ul>
            </div>
        </div>
    );
};
export default Home;