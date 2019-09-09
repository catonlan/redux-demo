import React from 'react'
import Footer from './Footer'
import AddTodo from '../components/containers/AddTodo'
import VisibleTodoList from '../components/containers/VisibleTodoList'



const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)


export default App