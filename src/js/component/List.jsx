import React from 'react'

import { saveData, deleteData, getAll } from 'js/LocalStorageRepository'

import AppBar from 'material-ui/AppBar'

import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import ConfirmDialog from 'js/component/ConfirmDialog'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import { EditorModeEdit, ContentAdd } from 'material-ui/svg-icons'
import DelBt from 'material-ui/svg-icons/action/delete'
import { redA700, blueA200 } from 'material-ui/styles/colors'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import { Link } from 'react-router-dom'

import mainStyle from 'css/main.css'
import listStyle from 'css/list.css'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

export default class OptsTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      deleteTarget: null,
      importData: null,
      lastUpdate: Date.now()
    }
  }
  render() {
    const itemMap = getAll()
    const items = Object.keys(itemMap).map(id => itemMap[id])
    const { deleteTarget, importData} = this.state
    return (
      <div>
        <ConfirmDialog
          open={!!deleteTarget}
          confirmMessage={`ID【${deleteTarget}】を削除してもよろしいですか`}
          completeMessage={'削除しました'}
          mainAction={::this.deleteAction}
          closeAction={() => this.setState({ deleteTarget: null })}
          />
        <ConfirmDialog
          open={!!importData}
          confirmMessage='IDが重複する場合は上書きされます。よろしいですか'
          completeMessage='インポートしました'
          mainAction={::this.importMst}
          closeAction={() => this.setState({ importData: null })}
          />
        <AppBar
          title='一覧'
          showMenuIconButton={false}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
              <MenuItem primaryText='インポート' onClick={::this.selectFile}/>
              <MenuItem primaryText='エクスポート' onClick={::this.donwloadMst}/>
            </IconMenu>
          }/>
        <div>
          <Table selectable={false}>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn className={listStyle.colId}>ID</TableHeaderColumn>
                <TableHeaderColumn>一致条件</TableHeaderColumn>
                <TableHeaderColumn className={listStyle.colLabel}>表示サンプル</TableHeaderColumn>
                <TableHeaderColumn className={listStyle.colAction}></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
            {items.map(d =>
              <TableRow key={d.id}>
                <TableRowColumn className={listStyle.colId}>{d.id}</TableRowColumn>
                <TableRowColumn>{d.regex}</TableRowColumn>
                <TableRowColumn className={listStyle.colLabel}>
                  <SampleLabel {...d} />
                  </TableRowColumn>
                <TableRowColumn className={listStyle.colAction}>
                  <IconButton>
                    <Link to={`/edit/${d.id}`}>
                      <EditorModeEdit />
                    </Link>
                  </IconButton>
                  <IconButton onClick={() => this.setState({deleteTarget: d.id})}>
                    <DelBt color={redA700}/>
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            )}
            </TableBody>
          </Table>
          <div style={{textAlign: 'center'}}>
            <Link to='/register'>
              <FloatingActionButton mini={true}>
                <ContentAdd/>
              </FloatingActionButton>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  deleteAction() {
    deleteData(this.state.deleteTarget)
    this.setState({
      lastUpdate: Date.now()
    })
  }
  selectFile() {
    const input = document.createElement('input')
    input.type = 'file'
    input.addEventListener('change', ({target: {files}}) => {
      const target = files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.setState({importData: reader.result})
      }
      reader.readAsText(target);
    })
    input.click()
  }
  donwloadMst() {
    const json = JSON.stringify(getAll())
    const blob = new Blob([json])
    const url = URL.createObjectURL(blob)
    const anc = document.createElement('a')
    anc.download = `envinfo_${Date.now()}.json`
    anc.href = url
    anc.click()
  }

  importMst() {
    const { importData } = this.state
    const data = JSON.parse(importData)
    Object.keys(data)
      .map(key => data[key])
      .forEach(saveData)
    this.setState({
      lastUpdate: Date.now()
    })
  }
}

const SampleLabel = ({bgColor, fontColor, label}) =>
  <span style={{
    backgroundColor: bgColor,
    color: fontColor,
    padding: 5
  }}>
    {label}
  </span>
