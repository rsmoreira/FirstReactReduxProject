// this state is not the Application it State, it is only the state
// this reducer is responsible for

// 'state = null' - meams, when the argument state is undefined, set it to null
export default function(state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;

    }

    return state;
}