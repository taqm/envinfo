import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import List from 'js/component/List'
import EditForm from 'js/component/EditForm'

export default class Options extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path='/' component={List}/>
            <Route exact path='/list' component={List}/>
            <Route exact path='/register' render={({history}) =>
              <EditForm register={true} history={history}/>
            } />
            <Route exact path='/edit/:id' render={({history, match: {params: {id}}}) =>
              <EditForm id={id} history={history}/>
            }/>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}
