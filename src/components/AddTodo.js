import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

export const AddTodo = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(value))
        setValue("")
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <FormControl>
                    <Input type="text" value={value} onChange={handleChange} />
                </FormControl>
                <Button
                    colorScheme="teal"
                    type="submit"
                    disabled={!value}
                >Add Todo</Button>
            </Flex>
        </form>
    )
}
