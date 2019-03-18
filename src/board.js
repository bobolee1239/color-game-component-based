import Component from './component.js';

import './board.css';

export default class Board extends Component {
    constructor(root){
        super(root);
        this.rgbElement = document.querySelector('.board .color-picked');
        this.msgElement = document.querySelector('.board .message');
    }

    reset(){

    }
    
    setRgbPrompt(rgbString){
        this.rgbElement.textContent = rgbString;
    }

    setMessage(msg){
        this.msgElement.textContent = msg;
    }

    static getRootClass(){
        return '.board';
    }
}
