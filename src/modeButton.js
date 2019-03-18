import Component from './component.js';
import './modeButton.css';

export default class ModeButton extends Component {
    constructor(root){
        super(root);
        this.mode = root.id;
        root.addEventListener('click', this.handleDomClick.bind(this));
    }

    static getRootClass(){
        return '.mode';
    }

    handleDomClick(){
        this.fire('click');
    }
}
