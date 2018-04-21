import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Quote extends Component {
  render() {
    const { info } = this.props

    return (
      <tr>
        <td>{ info.id }</td>
        <td>
          <i className='fa fa-file-text-o'></i>
          <Link to={'/quote/' + info.id}>View Detail</Link>
        </td>
        <td>{ info.cite }</td>
        <td>{ info.date }</td>
        <td>
          <button onClick={ () => { this.props.fn(info.id) } }>Delete</button>
        </td>
      </tr>
    )
  }
}

export default Quote
