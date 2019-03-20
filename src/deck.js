import Component from './component.js';
import Card from './card.js';

import './deck.css';

export default class Deck extends Component {
    constructor(root, numCards = 3){
        super(root);

        this.numCards = numCards;
        this.gameOver = false;

        const els = document.querySelectorAll(Card.getRootClass());
        this.cards = [];

        /*
        this.cards = els.map((el, idx) => {
            if(idx < this.numCards){
                return new Card(el);
            }
        });
        */

        for(let i=0, j=els.length; i<j; ++i){
            let card = new Card(els[i]);
            card.on('click', this.handleCardClick.bind(this));
            this.cards.push(card);

            if(i >= this.numCards){
                this.cards[i].hide();
            }
        }
        this.pickedColor = this.pickColor();
    }

    setGameOver() {
        this.gameOver = true;
    }

    reset(){
        this.gameOver = false;
        for(let i=0, j=this.cards.length; i<j; ++i){
            this.cards[i].reset(i < this.numCards);
        }
        this.pickedColor = this.pickColor();
    }

    setNumCards(numCards){
        this.numCards = numCards;
    }

    pickColor(){
        return this.cards[Math.floor(this.numCards * Math.random())].getColor();
    }

    getPickedColor(){
        return this.pickedColor;
    }

    setCardsColor(color) {
        for (let card of this.cards) {
            card.setColor(color);
        }
    }

    handleCardClick(firer, color){
        if(this.gameOver) return;

        if(color === this.pickedColor){
            this.setCardsColor('#fff');
            this.gameOver = true;
            this.fire('rightClick', this.pickedColor);
        } else {
            firer.fadeOut();
            this.fire('wrongClick');
        }

    }

    static getRootClass(){
        return '.deck';
    }
}
