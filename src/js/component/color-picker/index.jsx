
import React, { PropTypes } from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import { TextValidator} from 'react-material-ui-form-validator'

import { DEFAULT_CONVERTER, converters } from 'js/component/color-picker/transformers'
import PickerDialog from 'js/component/color-picker/PickerDialog'

const ColorPicker = ({
  // ColorPicker
  defaultValue,
  onChange,
  convert,

  // State
  showPicker,
  setShowPicker,
  value,
  setValue,

  ...rest
}) => (
  <div>
    <TextValidator
      {...rest}
      value={value}
      onClick={() => setShowPicker(true)}
      onChange={e => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
    />
    {showPicker && (
      <PickerDialog
        value={value}
        onClick={() => {
          setShowPicker(false)
          onChange(value)
        }}
        onChange={c => {
          const newValue = converters[convert](c)
          setValue(newValue)
          onChange(newValue)
        }}
      />
    )}
  </div>
)

ColorPicker.defaultProps = {
  convert: DEFAULT_CONVERTER
}

const makeColorPicker = compose(
  withState('showPicker', 'setShowPicker', false),
  withState('value', 'setValue', ({ defaultValue }) => defaultValue)
)

export default makeColorPicker(ColorPicker)
