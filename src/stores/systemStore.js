import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

const CHANGE = 'CHANGE';
let systemState = [];

class SystemStore extends EventEmitter {

    constructor() {
        super();

        // Registers action handler with the Dispatcher.
        Dispatcher.register(this.registerToActions.bind(this));
    }

    // Switches over the action's type when an action is dispatched.
    registerToActions(action) {
        switch (action.actionType) {
            case ActionTypes.ADD_NEW_SYSTEM:
                this.addNewItem(action.payload);
                break;
            case ActionTypes.DELETE_SYSTEM:
                this.deleteItem(action.payload);
                break;
            default:
                break;
        }
    }

    // Adds a new item to the list and emits a CHANGED event. 
    addNewItem(item) {
        item.id = Date.now();
        systemState.push(item);
        this.emit(CHANGE);
    }


    // Delete system from the list and emits a CHANGED event. 
    deleteItem(id) {
        let filterSystems = systemState.filter(sys => sys.id !== id);
        systemState = filterSystems;
        this.emit(CHANGE);
    }

    // Returns the current store's state.
    getAllItems() {
        return systemState;
    }

    // Hooks a React component's callback to the CHANGED event.
    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    // Removes the listener from the CHANGED event.
    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }
}

export default new SystemStore();