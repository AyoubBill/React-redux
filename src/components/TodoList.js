import {Box} from "@chakra-ui/react"
import Todo from "./Todo"
import { useSelector } from "react-redux"
import { getTodoByFilter } from "../redux/Selector"

export const TodoList = () => {

    const {todos, filterReducer} = useSelector(state => state)
    const filterTodos = getTodoByFilter(todos, filterReducer)

    return (
        <Box my={3}>
            {filterTodos.length ? filterTodos.map(todo => (<Todo key={`todo-${todo.id}`} todo={todo} />)) : 
            <Box textAlign="center" my="4">No Todos Yey!</Box>}
        </Box>
    )
}
