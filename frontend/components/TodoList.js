import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
/*   constructor(props){
    super(props)
  } */




  render() {
    return (
      <div id='todos'>     
        {this.props.todos.map( todo => (
          // console.log(todo.name)
           <Todo id={todo.id} info={todo.name} completed={todo.completed} />
         ))}
      </div>
    )
  }
}
