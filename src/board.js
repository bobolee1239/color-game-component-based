import Component from './component.js';

import './board.css';

export default class Board extends Component {
    constructor(root, color){
        super(root);
        this.rgbElement = document.querySelector('.board .color-picked');
        this.msgElement = document.querySelector('.board .message');
        this.clock      = document.querySelector('.board .clock');
        this.clockFd    = null;
        this.reset(color);
    }

    reset(color){
        this.clock.remainTime = 5;

        this.rgbElement.textContent = color;
        this.msgElement.textContent = 'What\'s the color?';
        this.clock.textContent = this.clock.remainTime.toString();

        // if (this.clockFd) {
        //     clearInterval(this.clockFd);
        //     this.clockFd = null;
        // }
    }

    showClock() {
        this.clock.classList.add('show');
        this.clock.classList.remove('hidden');
    }

    hideClock() {
        this.clock.classList.remove('show');
        this.clock.classList.add('hidden');
    }

    resetClock(){
        this.clock.remainTime = 5;
    }

    startClock(){
        /* clock already start */
        if (this.clockFd) {
            console.log('[WARN] clock already start!');
            return;
        }
        // arrow function => lexical this
        this.clockFd = setInterval(() => {
            if (this.clock.remainTime > 1) {
                this.fire('timefly', --this.clock.remainTime);
                this.clock.textContent = this.clock.remainTime.toString();
            } else {
                this.fire('timeout');
                this.stopClock();
            }
        }, 1000);
    }

    stopClock(){
        if (this.clockFd) {
            clearInterval(this.clockFd);
            this.clockFd = null;
        }
        this.resetClock();
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
