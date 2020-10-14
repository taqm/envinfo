import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import * as React from 'react';

type Props = {
  className?: string;
  text: string;
  fontColor: string;
  bgColor: string;
};

type StyleProps = {
  fontColor: string;
  bgColor: string;
};

const useStyles = makeStyles(() => ({
  root: (props: StyleProps) => ({
    color: props.fontColor,
    backgroundColor: props.bgColor,
    fontSize: 32,
    borderRadius: 8,
    padding: '4px 8px',
    fontWeight: 'bold',
  }),
}));

const InfoLabel: React.FC<Props> = ({
  className,
  text,
  fontColor,
  bgColor,
}) => {
  const classes = useStyles({ fontColor, bgColor });
  return <span className={classnames(classes.root, className)}>{text}</span>;
};

InfoLabel.displayName = 'InfoLabel';
export default InfoLabel;
