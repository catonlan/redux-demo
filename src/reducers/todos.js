const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const res = [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
            console.log('接收到ADD_TODO,更新数据 2222:', res)
            return res
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        default:
            console.log('未匹配的', action)
            return state
    }
}

export default todos;