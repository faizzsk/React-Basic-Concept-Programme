import React from 'react'
import ReactDOM from 'react-dom'

class Book extends React.Component {
  render() {
    return (
      <div>
          {this.props.title(true)}
      </div>
    );
  }
}

export default Book