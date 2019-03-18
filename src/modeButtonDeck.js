import Component from './component.js';
import ModeButton from './modeButton.js';

export default class ModeButtonDeck extends Component {
    constructor(root){
        super(root);
        this.modes = [];
        this.selectedMode = undefined;

        let els = document.querySelectorAll('.mode');
        for(let el of els){
            let modeButton = new ModeButton(el);
            modeButton.on('click', this.handleModeButtonClick.bind(this));
            this.modes.push(modeButton);

            if (el.classList.contains('selected')){
                this.selectedMode = el.id;
            }
        }
    }
    static getRootClass(){
        return '.modeDeck';
    }

    handleModeButtonClick(firer){
        for(let mode of this.modes){
            if (mode.mode === firer.mode){
                mode.root.classList.add('selected');
            } else {
                mode.root.classList.remove('selected');
            }
        }

        /* fire event if someone register on it */
        this.fire(firer.mode);
    }
}
