import React from 'react'

import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import { EditorModeEdit } from 'material-ui/svg-icons'
import DelBt from 'material-ui/svg-icons/action/delete'
import { redA700 } from 'material-ui/styles/colors'

const tableStyle = {
  id: { width: 200 },
  action: { width: 100 }
}
const data = [
  {
    id: 'test',
    label: 'らべるてすと',
    regex: '¥.test$',
    color: {
      bg: '#000',
      font: '#FFF'
    }
  }
]

const OptsTable = () =>
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
          <TableHeaderColumn>表示サンプル</TableHeaderColumn>
          <TableHeaderColumn style={tableStyle.action}></TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
      { data.map(d =>
        <TableRow key={d.id}>
          <TableRowColumn style={tableStyle.id}>{d.id}</TableRowColumn>
          <TableRowColumn>{d.regex}</TableRowColumn>
          <TableRowColumn>
            <SampleLabel
              style={d.color}
              label={d.label}
            />
            </TableRowColumn>
          <TableRowColumn style={tableStyle.action}>
            <IconButton><EditorModeEdit /></IconButton>
            <IconButton><DelBt color={redA700}/></IconButton>
          </TableRowColumn>
        </TableRow>
      )}
      </TableBody>
    </Table>
  </div>

const SampleLabel = ({style: {bg, font}, label}) =>
  <span style={{backgroundColor: bg, color: font}}>
    {label}
  </span>

export default OptsTable
