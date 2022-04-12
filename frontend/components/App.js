import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import axios from 'axios'

export default class App extends React.Component {
    constructor(){
      super()
      this.state={todos:[]}
    }
   
    getTodos = () => {
      axios.get('http://localhost:9000/api/todos')
        .then(res => {
           console.log('data', res.data.data)
           this.setState({todos:res.data.data} )
        }).catch(err => console.error(err))
    }
    
    /* on first render calling external data */
    componentDidMount(){
      this.getTodos()
    }
  
  render() {


    return (
      <div>
        {/* {!this.state.todos.length && <div>loading data...</div> } */}
        <TodoList todos={this.state.todos}  />
        <Form />
      </div>
    )
  }
}
