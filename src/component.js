/** **********************************************
 ** 1. A base class for every Component
 ** 2. The first param of an event handler is
 **    always the current fired component.
 ** **********************************************/

export default class Component {
    /* Override this method */
    static getRootClass(){
        return '.component';
    }

    constructor(root){
        this.root = root;
        this.handlers = {};
    }

    on(event, handler){
        this.handlers[event] = handler;
    }

    fire(event, ...args){
        this.handlers[event](this, ...args);
    }
}
