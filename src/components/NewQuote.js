import React, { Component } from 'react'

import request from 'superagent'
const API_URL = 'http://192.168.1.141:3000'

class NewQuote extends Component {
  createNewQuote = (e) => {
    e.preventDefault()

    const quoteData = {
      quote: e.target.quote.value,
      cite: e.target.who.value,
      date: e.target.date.value
    }

    request
      .post(`${API_URL}/api/quotes`)
      .send(quoteData)
      .then(() => {

        request
          .get(`${API_URL}/api/quotes`)
          .then((data) => {
            this.setState({
              quotes: data.body
            })
          })
          .catch(function(e) {
            console.log(e)
          })

      })
      .catch(function(e) {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <h3>Create new quote</h3>
        <form className='form' onSubmit={ (e) => { this.createNewQuote(e) } }>
          <div>
            <label>Quote</label>
            <input type='text' name='quote' />
          </div>

          <div>
            <label>Who?</label>
            <input type='text' name='who' />
          </div>

          <div>
            <label>Date</label>
            <input type='text' name='date' />
          </div>

          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default NewQuote
