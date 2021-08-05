import { ADD_TODO, TOGGLE_TODO } from "../actionsTypes"

const initialeState = {
    todos: []
}

const todos = (state=initialeState, action) => {
    switch(action.type) {
        case ADD_TODO: {
            const {id, content} = action.payload
            return {
                todos: [...state.todos, {content, completed: false, id}]
            }
        }
        case TOGGLE_TODO: {
            const {id} = action.payload
            const todos = state.todos.map(obj => obj.id === id ? {...obj, completed: !obj.completed} : obj)
            return {todos}
        }          
        default: {
            return state
        }
    }
}

export default todos
