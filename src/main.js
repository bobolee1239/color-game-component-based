import Component from './component.js';
import Navbar from './navbar.js';
import Board from './board.js';
import Reset from './reset.js';
import Deck from './deck.js';

import './main.css';

class Main extends Component{
    constructor(root){
        super(root);
        this.navbar = new Navbar(document.querySelector(Navbar.getRootClass()));
        this.board = new Board(document.querySelector(Board.getRootClass()));
        this.resetButton = new Reset(document.querySelector(Reset.getRootClass()));
        this.deck = new Deck(document.querySelector(Deck.getRootClass()), 3);

        this.board.setRgbPrompt(this.deck.getPickedColor());
        this.board.setMessage('What\'s the color?');

        this.deck.on('rightClick', this.handleRightClick.bind(this));
        this.deck.on('wrongClick', this.handleWrongClick.bind(this));

        this.resetButton.on('click', this.handleReset.bind(this));

        this.navbar.on('easy', this.handleEasyMode.bind(this));
        this.navbar.on('hard', this.handleHardMode.bind(this));
        this.navbar.on('nightmare', this.handleNightmareMode.bind(this));
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

    }

    handleRightClick(firer){
        this.root.style.backgroundColor = this.deck.getPickedColor();
        this.resetButton.setPrompt('Play Again');
        this.board.setMessage('Correct!');
    }

    handleWrongClick(firer){
        this.board.setMessage('Try Again!');
    }

    handleReset(firer){
        this.reset();
    }

    reset(){
        this.resetButton.reset();
        this.deck.reset();
        this.board.setRgbPrompt(this.deck.getPickedColor());
        this.board.setMessage('What\'s the color?');
        this.root.style.backgroundColor = '#232323';
    }
}

window.onload = function(){
    var game = new Main(document.body);
};
