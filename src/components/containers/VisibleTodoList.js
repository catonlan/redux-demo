
import {toggleTodo} from '../../actions/index'
import TodoList from '../../components/TodoList'

import { connect } from 'react-redux';


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)    
        case 'SHOW_ALL':
            default:
                return todos    
    }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)