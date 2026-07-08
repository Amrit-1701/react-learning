import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'hello world' }],
}

//big version of reducer
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo) //Push into array
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload

            const todo = state.todo.find((todo) => todo.id === id)
            if (todo) {
                todo.text = text
            }
        }
    },
})

//addtodo always provide state(current state of recent initialSate) and action(provide passed data values ) 
//Reducers are simply functions that change the state.

export const {addTodo , removeTodo} =todoSlice.actions

export default todoSlice.reducer