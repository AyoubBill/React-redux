import { Box, Checkbox, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import toggleTodo from "../redux/actions"

const Todo = ({todo}) => {

    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()
    const handleChecked = () => dispatch(toggleTodo(todo.id))

    useEffect(() => {
        setChecked(todo.completed)
    }, [todo])

    return (
        <Box mb={1} p={2} bgColor="lightcoral">
            <Checkbox onChange={handleChecked} colorScheme="teal" isChecked={checked}>
                <Text as={todo.completed && "del"}>{todo.content}</Text>
            </Checkbox>
        </Box>
    )
}

export default Todo
