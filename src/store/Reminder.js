export const ACTIONS = {
    ADD_REMINDER: 'ADD_REMINDER'
}

//Ation Creators START
export const addReminder = (text) => {
    //action is a plain js object
    const action = {
        type: ACTIONS.ADD_REMINDER,
        text
    }
    console.log('reminder as action', action);
    return action;
}
//Ation Creators END

//Reducers START Takes the state and Actions and return new state
export const remindersReducer = (prevState = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD_REMINDER:

            let reminders = [
                ...prevState,
                {
                    text: action.text,
                    id: Math.round(Math.random())
                }
            ]

            console.log('reminder as state', reminders);
            return reminders;
        default:
            return prevState;
    }
}
//Reducers END