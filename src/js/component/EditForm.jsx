import React from 'react'

import AppBar from 'material-ui/AppBar'

import { getData, saveData } from 'js/LocalStorageRepository'

import IconButton from 'material-ui/IconButton'
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import RaisedButton from 'material-ui/RaisedButton'
import ConfirmDialog from 'js/component/ConfirmDialog'

import ColorPicker from 'js/component/color-picker'
import mainStyle from 'css/main.css'
import formStyle from 'css/form.css'
import contentStyle from 'css/content.css'

import InfoLabel from 'js/component/InfoLabel'

export default class EditForm extends React.Component {

  constructor(props) {
    super(props)
    const { register, id } = this.props
    const data = !register ? getData(id)
      : {
          id: '',
          regex: '',
          label: '',
          bgColor: '',
          fontColor: ''
      }
    this.state = Object.assign({
      confirmDialog: false,
      saved: false
    }, data)
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isUniqueId', v => {
      const { register } = this.props
      const { saved } = this.state
      return !register || saved || !getData(v)
    })
    ValidatorForm.addValidationRule('isValidRegex', v => {
      try {
        ''.match(v)
        return true

      } catch (e) {
        return false
      }
    })
  }

  render() {
    const { register } = this.props
    const { confirmDialog } = this.state
    return (
      <div>
        <ConfirmDialog
          open={confirmDialog}
          confirmMessage='保存してもよろしいですか'
          completeMessage='保存しました'
          closeAction={() =>
            this.setState({confirmDialog: false})
          }
          mainAction={::this.saveAction}
          closeAfterAction={() =>
            this.props.history.replace(`/edit/${this.state.id}`)
          }
        />
        <AppBar
          title='編集'
          iconElementLeft={
            <IconButton
              onClick={() => this.props.history.push('/list')}>
              <NavigationBack />
            </IconButton>
          } />
        <ValidatorForm
          className={mainStyle.contents}
          onSubmit={::this.handleSubmit}>
          <TextValidator
            name='id'
            floatingLabelText='ID'
            fullWidth={true}
            disabled={!register}
            value={this.state.id}
            autoComplete='off'
            validators={['required', 'isUniqueId']}
            errorMessages={['この項目を入力してください', 'IDが重複しています']}
            onChange={(ev, nv) => this.setState({id: nv})} />

          <TextValidator
            name='regex'
            floatingLabelText='正規表現'
            fullWidth={true}
            value={this.state.regex}
            autoComplete='off'
            validators={['required', 'isValidRegex']}
            errorMessages={['この項目を入力してください', '正規表現が不正です']}
            onChange={(ev, nv) => this.setState({regex: nv})} />

          <TextValidator
            name='label'
            floatingLabelText='ラベル'
            fullWidth={true}
            value={this.state.label}
            autoComplete='off'
            validators={['required']}
            errorMessages={['この項目を入力してください']}
            onChange={(ev, nv) => this.setState({label: nv})} />

          <div className={formStyle.colors}>
            <ColorPicker
              name='bgColor'
              floatingLabelText='背景の色'
              defaultValue={this.state.bgColor}
              autoComplete='off'
              validators={['required']}
              errorMessages={['この項目を入力してください']}
              onChange={c => this.setState({bgColor: c})} />
            &nbsp;
            <ColorPicker
              name='fontColor'
              floatingLabelText='フォントの色'
              defaultValue={this.state.fontColor}
              autoComplete='off'
              validators={['required']}
              errorMessages={['この項目を入力してください']}
              onChange={c => this.setState({fontColor: c})} />
          </div>
          <div>
            <RaisedButton
              primary={true}
              label='保存'
              type='submit' />
          </div>
        </ValidatorForm>
        <div className={contentStyle.sample}>
          <InfoLabel
            {...this.state}
          />
        </div>
      </div>
    )
  }

  handleSubmit(ev) {
    this.setState({confirmDialog: true})
  }

  saveAction() {
    const {id, regex, label, bgColor, fontColor} = this.state
    this.setState({
      saved: true
    })
    saveData({
      id, regex, label, bgColor, fontColor
    })
  }
}
