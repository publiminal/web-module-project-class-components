import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className='todo'>
        {this.props.info}
      </div>
    )
  }
}
