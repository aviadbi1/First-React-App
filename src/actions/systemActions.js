import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class SystemActions {

    addNewSystem(system) {
        // Note: This is usually a good place to do API calls.
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_NEW_SYSTEM,
            payload: system
        });
    }

    deleteSystem(systemId) {
        // Note: This is usually a good place to do API calls.
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_SYSTEM,
            payload: systemId
        });
    }

}

export default new SystemActions();