import VISIBILITY_FILTER from "../constants";


export const getTodoByFilter = (store, filterReducer) => {
    switch(filterReducer) {
        case VISIBILITY_FILTER.COMPLETED:
            return store.todos.filter(todo => todo.completed)
        case VISIBILITY_FILTER.INCOMPLETED:
            return store.todos.filter(todo => !todo.completed)
        default:
            return store.todos
    }
}