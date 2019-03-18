import Component from './component.js';

import './reset.css';

export default class ResetButton extends Component {
    constructor(root){
        super(root);
        this.msg = document.querySelector('.reset span');
        this.root.addEventListener('click', this.handleDomClick.bind(this));
    }

    reset(){
        this.msg.textContent = 'New Color';
    }

    handleDomClick(){
        this.fire('click');
    }

    setPrompt(msg){
        this.msg.textContent = msg;
    }

    static getRootClass(){
        return '.reset';
    }
}
