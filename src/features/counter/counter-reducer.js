const SET_ADD = 'SET_ADD'
const SET_SUB = 'SET_SUB'




const init = {
    count: 200
}

const countReducer = (counterState = init, action) => {
    switch (action.type) {
        case SET_ADD: {
            return {
                count: counterState.count + 1
            }
        }
        case SET_SUB: {
            return {
                count: counterState.count - 1
            }
        }
        default: return counterState
    }
}

export default countReducer