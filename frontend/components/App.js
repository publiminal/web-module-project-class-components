import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import axios from 'axios'

export default class App extends React.Component {
    constructor(){
      super()
      this.state={
        todos:[],
        newTodo:''
      }
    }
   
    getTodos = () => {
      axios.get('http://localhost:9000/api/todos')
        .then(res => {
           /* console.log('data', res.data.data) */
           this.setState({todos:res.data.data} )
        }).catch(err => console.error(err))
    }
    
    handleChanges = e => {
      // update state with each keystroke
      this.setState({ newTodo: e.target.value })
    };
  
    addNewTodo = (todo) => {
      const newTodo = {completed:false, id:Date.now().toString(), name:todo}
      this.setState({todos:[...this.state.todos, newTodo]}) 
    } 

    
    // class property to submit form
    handleSubmit = e => {
      e.preventDefault();/* 
      console.log('formSubmit', e) */
      this.addNewTodo(this.state.newTodo)
      this.setState({ newTodo: '' })
    }




    toggleTodo = todoId => {
      this.setState({
        todos:this.state.todos.map(todo => {
          if(todo.id === todoId) {
            return { ...todo , completed:!todo.completed}
          }
          return todo
        })
      })
    }


    /* on first render calling external data */
    componentDidMount(){
      this.getTodos()
    }
  
  render() {


    return (
      <div>
        {/* {!this.state.todos.length && <div>loading data...</div> } */}
        <TodoList  todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form 
          handleSubmit={this.handleSubmit} 
          handleChanges={this.handleChanges}
          newTodo={this.state.newTodo}    
        />
      </div>
    )
  }
}
