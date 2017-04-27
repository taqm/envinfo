import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import List from './List'
import EditForm from './EditForm'

export default class Options extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <span><Link to='/list'>list</Link></span>
            <span><Link to='/register'>register</Link></span>

            <Route exact path='/' component={List}/>
            <Route exact path='/list' component={List}/>
            <Route exact path='/register' render={() =>
              <EditForm register={true} />
            } />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}
