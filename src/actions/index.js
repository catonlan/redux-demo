let nextTodoId = 0
export const addTodo = (text) => {
    const res = {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
    console.log('触发[addTodo]动作 11111:', res)
    return res
}
export const addTwo = (type, title) => {
    const res = {
        type: type,
        id: nextTodoId++,
        text:title
    }
    console.log('触发[addTwo]动作 11111:', res)
    return res
}

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}