import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import IconButton from 'material-ui/IconButton'
import { EditorModeEdit } from 'material-ui/svg-icons'
import DelBt from 'material-ui/svg-icons/action/delete'
import { redA700 } from 'material-ui/styles/colors'

import Menu from './Menu'

const tableStyle = {
  id: { width: 200 },
  action: { width: 100 }
}

export default class Options extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Title"
            showMenuIconButton={false}
            iconElementRight={<Menu />}/>
          <Table selectable={false}>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn style={tableStyle.id}>ID</TableHeaderColumn>
                <TableHeaderColumn>一致条件</TableHeaderColumn>
                <TableHeaderColumn>ラベル</TableHeaderColumn>
                <TableHeaderColumn style={tableStyle.action}></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
            { data.map(d =>
              <TableRow key={d.id}>
                <TableRowColumn style={tableStyle.id}>{d.id}</TableRowColumn>
                <TableRowColumn>{d.regex}</TableRowColumn>
                <TableRowColumn>{d.label}</TableRowColumn>
                <TableRowColumn style={tableStyle.action}>
                  <IconButton><EditorModeEdit /></IconButton>
                  <IconButton><DelBt color={redA700}/></IconButton>
                </TableRowColumn>
              </TableRow>
            )}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>
    )
  }
}

const data = [
  {
    id: 'test',
    label: 'らべるてすと',
    regex: '¥.test$'
  }
]
