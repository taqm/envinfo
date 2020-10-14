import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import InfoLabel from '../InfoLabel';

export type EnvItem = {
  id: string;
  label: string;
  fontColor: string;
  bgColor: string;
  pattern: string;
};

type Props = {
  items: EnvItem[];
};

const EnvListTable: React.FC<Props> = (props) => {
  const { items } = props;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>一致条件</TableCell>
          <TableCell>表示サンプル</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.pattern}</TableCell>
            <TableCell>
              <InfoLabel
                text={item.label}
                fontColor={item.fontColor}
                bgColor={item.bgColor}
                size="medium"
              />
            </TableCell>
            <TableCell />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

EnvListTable.displayName = 'EnvListTable';

export default EnvListTable;
