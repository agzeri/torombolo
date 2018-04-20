import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Create new quote</h3>
        <form className='form'>
          <div>
            <label>Quote</label>
            <input type='text' />
          </div>

          <div>
            <label>Who?</label>
            <input type='text' />
          </div>

          <div>
            <label>Date</label>
            <input type='text' />
          </div>

          <button>Save</button>
        </form>

        <table className='table'>
          <thead>
            <tr>
              <td>API URL</td>
              <td>Who?</td>
              <td>Date</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i className='fa fa-file-text-o'></i>https://twitter.com</td>
              <td>Damian</td>
              <td>April, 2018</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <td><i className='fa fa-file-text-o'></i>https://twitter.com</td>
              <td>Damian</td>
              <td>April, 2018</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <td><i className='fa fa-file-text-o'></i>https://twitter.com</td>
              <td>Damian</td>
              <td>April, 2018</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>

            <tr>
              <td><i className='fa fa-file-text-o'></i>https://twitter.com</td>
              <td>Damian</td>
              <td>April, 2018</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>

          </tbody>
        </table>

        
      </div>
    );
  }
}

export default App;
