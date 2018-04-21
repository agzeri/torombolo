import React, { Component } from 'react'
import request from 'superagent'

import Quote from './Quote'

const API_URL = 'http://192.168.1.141:3000'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
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
  }

  deleteQuote = quoteId => {

    request
      .delete(`${API_URL}/api/quotes/${quoteId}`)
      .then(() => {
        console.log('Quote eliminada.')

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
      <table className='table'>
        <thead>
          <tr>
            <td>#</td>
            <td>API URL</td>
            <td>Who?</td>
            <td>Date</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {this.state.quotes.map((quote) => {
            return <Quote info={quote} fn={this.deleteQuote} />
          })}
        </tbody>
      </table>
    )
  }
}

export default Home
