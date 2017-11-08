import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CounterRedux, { addToCounter, minusToCounter, resetCounter } from './counter-redux'

import { connect } from 'react-redux'

const App = ({ counter, add, minus, reset }) => (
  <div>
    <h1> { counter } </h1>
    <button onClick={() => add()}> + </button>
    <button onClick={() => minus()}> - </button>
    <button onClick={() => reset()}> Reset Counter </button>
  </div>
)

const mapStateToProps = state => (
  {
    counter: state.get('counter')
  }
)

const mapDispatchToProps = dispatch => (
  {
    add: () => {
      dispatch(addToCounter())
    },
    minus: () => {
      dispatch(minusToCounter())
    },
    reset: () => {
      dispatch(resetCounter())
    }
  }
)

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

let store = createStore(
  CounterRedux,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={ store } >
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)