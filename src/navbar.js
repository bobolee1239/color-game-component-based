import Component from './component.js';
import ModeButtonDeck from './modeButtonDeck.js';

import './navbar.css';

export default class Navbar extends Component {
    constructor(root){
        super(root);
        this.modeButtonDeck =
            new ModeButtonDeck(document.querySelector(ModeButtonDeck.getRootClass()));
        this.modeButtonDeck.on('easy', this.handleEasyMode.bind(this));
        this.modeButtonDeck.on('hard', this.handleHardMode.bind(this));
        this.modeButtonDeck.on('nightmare', this.handleNightmareMode.bind(this));
    }

    getSelectedMode() {
        return this.modeButtonDeck.getSelectedMode();
    }

    handleEasyMode(firer){
        this.fire('easy');
    }

    handleHardMode(firer){
        this.fire('hard');
    }

    handleNightmareMode(firer){
        this.fire('nightmare');
    }

    static getRootClass(){
        return '.navbar';
    }
}
