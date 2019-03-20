import Component from './component.js';

import './card.css';

export default class Card extends Component{
    constructor(root){
        super(root);

        // generate a random color
        this.root.style.backgroundColor = Card.randomColor();

        this.root.addEventListener('click', this.handleDomClick.bind(this));
    }

    reset(toShow = true){
        this.root.style.backgroundColor = Card.randomColor();
        this.root.classList.remove('fade');

        if(toShow){
            this.root.classList.remove('hidden');
        } else {
            this.root.classList.add('hidden');
        }

    }

    handleDomClick(){
        this.fire('click', this.root.style.backgroundColor);
    }

    fadeOut(){
        this.root.classList.add('fade');
    }

    hide(){
        this.root.classList.add('hidden');
    }

    getColor(){
        return this.root.style.backgroundColor;
    }

    setColor(rgbString){
        this.root.style.backgroundColor = rgbString;
    }

    static randomColor(){
        return 'rgb(' +
                Math.floor(Math.random()*256).toString() + ',' +
                Math.floor(Math.random()*256).toString() + ',' +
                Math.floor(Math.random()*256).toString() +
                 ')';
    }
    static getRootClass(){
        return '.card';
    }
}
