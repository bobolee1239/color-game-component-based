import Component from './component.js';

import './reset.css';

export default class ResetButton extends Component {
    constructor(root){
        super(root);
        this.msg = document.querySelector('.reset span');
        this.root.addEventListener('click', this.handleDomClick.bind(this));
        this.reset();
    }

    reset(){
        this.msg.textContent = 'New Color';
    }

    hide(){
        this.root.classList.add('hidden');
        this.root.classList.remove('show');
    }

    show() {
        this.root.classList.add('show');
        this.root.classList.remove('hidden');
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
