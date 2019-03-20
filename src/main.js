import Component from './component.js';
import Navbar from './navbar.js';
import Board from './board.js';
import Reset from './reset.js';
import Deck from './deck.js';

import './main.css';

export default class Main extends Component{
    constructor(root){
        super(root);
        this.navbar = new Navbar(document.querySelector(Navbar.getRootClass()));
        this.resetButton = new Reset(document.querySelector(Reset.getRootClass()));
        this.deck = new Deck(document.querySelector(Deck.getRootClass()), 3);
        this.board = new Board(document.querySelector(Board.getRootClass()),
                                this.deck.getPickedColor());
        this.board.on('timefly', this.handleTimefly.bind(this));
        this.board.on('timeout', this.handleTimeout.bind(this));

        this.deck.on('rightClick', this.handleRightClick.bind(this));
        this.deck.on('wrongClick', this.handleWrongClick.bind(this));

        this.resetButton.on('click', this.handleReset.bind(this));

        this.navbar.on('easy', this.handleEasyMode.bind(this));
        this.navbar.on('hard', this.handleHardMode.bind(this));
        this.navbar.on('nightmare', this.handleNightmareMode.bind(this));

        this.reset();
    }

    handleTimefly(firer, remainTime) {
        /* Blink the background */
        if (remainTime > 2) {
            this.root.classList.add('blink1');
            setTimeout(() => {
                this.root.classList.remove('blink1');
            }, 100);
        } else {
            this.root.classList.add('blink2');
            setTimeout(() => {
                this.root.classList.remove('blink2');
            }, 100);
        }
    }

    handleTimeout(firer) {
        /* gameOver */
        this.root.style.backgroundColor = this.deck.getPickedColor();
        this.deck.setCardsColor('#fff');
        this.resetButton.setPrompt('Play Again');
        this.board.setMessage('Timeout!');
        this.board.hideClock();
        this.resetButton.show();
        this.deck.setGameOver();
    }

    handleEasyMode(firer){
        this.deck.setNumCards(3);
        this.reset();
    }

    handleHardMode(firer){
        this.deck.setNumCards(6);
        this.reset();
    }

    handleNightmareMode(firer){
        this.deck.setNumCards(6);
        this.reset();
    }

    handleRightClick(firer, pickedColor){
        this.root.style.backgroundColor = pickedColor;
        this.resetButton.setPrompt('Play Again');
        this.board.setMessage('Correct!');
        this.resetButton.show();

        if (this.navbar.getSelectedMode() === 'nightmare') {
            this.board.stopClock();
            this.board.hideClock();
        }
    }

    handleWrongClick(firer){
        this.board.setMessage('Try Again!');
    }

    handleReset(firer){
        this.reset();
    }

    reset() {
        this.resetButton.reset();
        this.deck.reset();
        this.board.reset(this.deck.getPickedColor());
        this.root.style.backgroundColor = '#232323';

        if (this.navbar.getSelectedMode() === 'nightmare') {
            this.board.showClock();
            this.resetButton.hide();
            this.board.startClock();
        } else {
            this.board.hideClock();
            this.resetButton.show();
            this.board.stopClock();
        }
    }

    static getRootClass(){
        return '.main';
    }
}

window.onload = function(){
    new Main(document.body);
};
