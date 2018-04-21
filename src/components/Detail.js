import React, { Component } from 'react'
import request from 'superagent'

import { withRouter } from 'react-router-dom'

const API_URL = 'http://192.168.1.141:3000'

class Detail extends Component {
  constructor() {
    super()

    this.state = {
      quoteText: '',
      author: ''
    }
  }

  componentDidMount() {
    request
      .get(`${API_URL}/api/quotes/${this.props.match.params.quoteId}`)
      .then((data) => {
        this.setState({
          quoteText: data.body.quote,
          author: data.body.cite
        })
      })
      .catch(function(e) {
        console.log(e)
      })
  }

  updateQuote = e => {
    e.preventDefault()

    const newText = e.target.updateText.value
    const newAuthor = e.target.updateAuthor.value

    request
      .put(`${API_URL}/api/quotes/${this.props.match.params.quoteId}`)
      .send({
        quote: newText,
        cite: newAuthor
      })
      .then((data) => {
        // this.setState({
        //   quoteText: data.body.quote,
        //   author: data.body.cite
        // })

        alert('Field was changed.')

        this.props.history.push('/')
      })
      .catch(function(e) {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <h1>Current: { this.state.quoteText }</h1>
        <h5>Author: { this.state.author }</h5>

        <form onSubmit={ this.updateQuote }>
          <h2>Edit Quote: </h2>

          <div>
            <label>Text: </label>
            <input type='text' name='updateText' />
          </div>
          <div>
            <label>Author: </label>
            <input type='text' name='updateAuthor' />
          </div>

          <button type='submit'>Save</button>

        </form>
      </div>
    )
  }
}

export default withRouter(Detail)
