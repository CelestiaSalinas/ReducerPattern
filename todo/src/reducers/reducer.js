export const initialState = {
    todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]
}
export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO':
             const newTodo =  
            {
             item:action.payload,
             id: new Date(),
             completed: false
               }
           
        return {
            todos: [...state.todos, newTodo]
        }
        case 'TOGGLE_COMPLETED':
            return{
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        if(!todo.completed) {
                            return {...todo, completed:!todo.completed}
                        } else {
                            return {...todo, completed:!todo.completed}
                        }
                    } else {
                            return todo
                        }
                    })
                
            }

        case 'CLEAR_COMPLETED':
            return{
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default: return state
    }
}