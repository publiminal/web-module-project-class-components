import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
              {/* <p>Your name</p> */}
              <input 
                  name='todo-input'
                  value={this.props.newTodo}
                  onChange={this.props.handleChanges}
                  type='text'
                  size="20"
              />
          </label>
          <button>Add new Todo</button>
        </form>
      </div>
    )
  }
}
