import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export default class ConfirmDialog extends React.Component {

  static defaultProps = {
    mainAction() {},
    closeAfterAction() {}
  }

  state = {
    complete: false
  }

  render() {
    const {
      confirmMessage,
      completeMessage,
      open,
      mainAction,
      closeAction
    } = this.props

    return (
      <div>
        <Dialog
          title='確認'
          actions={[
            <FlatButton
              label='キャンセル'
              primary={true}
              onTouchTap={closeAction}
            />,
            <FlatButton
              label='はい'
              primary={true}
              onTouchTap={() => {
                mainAction()
                closeAction()
                this.setState({complete: true})
              }}
            />
          ]}
          modal={false}
          open={this.props.open}
          onRequestClose={closeAction}>
          {confirmMessage}
        </Dialog>
        <Dialog
          title='完了'
          actions={[
            <FlatButton
              label='閉じる'
              primary={true}
              onTouchTap={::this.completeDialogClose}
            />
          ]}
          modal={false}
          open={this.state.complete}
          onRequestClose={::this.completeDialogClose}>
          {completeMessage}
        </Dialog>
      </div>
    )
  }
  completeDialogClose() {
    const { closeAfterAction } = this.props
    closeAfterAction()
    this.setState({complete: false})
  }
}