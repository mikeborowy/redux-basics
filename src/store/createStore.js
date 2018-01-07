import * as Redux from 'redux';
import {remindersReducer} from './Reminder';

//Store is a global object that holds app state.
//It allows to be updated state by dispachting actions
//It chabges the state based on by listining actions that we dispatch
const reducers = Redux.combineReducers({
    remindersReducer
});

export function initStore() {
    return Redux.createStore(
        reducers
    );
}
