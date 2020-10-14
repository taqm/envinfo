import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import * as React from 'react';

type Size = 'large' | 'medium';
type Props = {
  className?: string;
  text: string;
  fontColor: string;
  bgColor: string;
  size?: Size;
};

type StyleProps = {
  fontColor: string;
  bgColor: string;
};

const useStyles = makeStyles(() => ({
  root: (props: StyleProps) => ({
    color: props.fontColor,
    backgroundColor: props.bgColor,
    fontWeight: 'bold',
  }),
  large: {
    fontSize: 32,
    borderRadius: 8,
    padding: '4px 8px',
  },
  medium: {
    fontSize: 24,
    borderRadius: 8,
    padding: '2px 4px',
  },
}));

const InfoLabel: React.FC<Props> = ({
  className,
  text,
  fontColor,
  bgColor,
  size = 'large',
}) => {
  const classes = useStyles({ fontColor, bgColor });
  return (
    <span className={classnames(classes.root, classes[size], className)}>
      {text}
    </span>
  );
};

InfoLabel.displayName = 'InfoLabel';
export default InfoLabel;
