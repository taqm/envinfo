import * as React from 'react';
import { SketchPicker, SketchPickerProps } from 'react-color';
import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const ColorPicker: React.VFC<Props> = ({ value, onChange }) => {
  const onPickerChange: SketchPickerProps['onChange'] = (ev) => {
    onChange(`rgba(${ev.rgb.r},${ev.rgb.g},${ev.rgb.b},${ev.rgb.a})`);
  };

  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Input readOnly value={value} />
      </PopoverTrigger>
      <PopoverContent>
        <SketchPicker color={value} onChange={onPickerChange} />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
