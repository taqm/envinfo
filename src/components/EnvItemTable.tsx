import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
} from '@chakra-ui/react';
import * as React from 'react';

import { EnvDataItem } from '../domains/EnvDataItem';
import EnvInfoLabel from './EnvInfoLabel';

type Props = {
  items: ReadonlyArray<EnvDataItem>;
  checkedItemIds: ReadonlySet<string>;
  onItemClick: (id: string) => void;
  onItemChecked: (id: string) => void;
  onItemUnchecked: (id: string) => void;
  onBatchChecked: () => void;
  onBatchUnchecked: () => void;
};

type RowProps = {
  item: EnvDataItem;
  isChecked: boolean;
  onClick: () => void;
  onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Row: React.VFC<RowProps> = ({
  item,
  isChecked,
  onClick,
  onCheckboxChange,
}) => {
  const onCheckboxClick: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();
  };

  return (
    <Tr
      key={item.id}
      cursor="pointer"
      bg={isChecked ? 'green.50' : undefined}
      _hover={{ boxShadow: 'lg' }}
      onClick={onClick}
    >
      <Td>
        <Flex alignItems="center">
          <Checkbox
            size="lg"
            isChecked={isChecked}
            onChange={onCheckboxChange}
            onClick={onCheckboxClick}
          />
        </Flex>
      </Td>
      <Td>{item.id}</Td>
      <Td>{item.pattern}</Td>
      <Td>
        <EnvInfoLabel
          text={item.label}
          fontColor={item.fontColor}
          bgColor={item.bgColor}
          size="small"
        />
      </Td>
    </Tr>
  );
};

const EnvItemTable: React.VFC<Props> = ({
  items,
  checkedItemIds,
  onItemClick,
  onItemChecked,
  onItemUnchecked,
  onBatchChecked,
  onBatchUnchecked,
}) => {
  const isAllChecked = React.useMemo(
    () => items.length === checkedItemIds.size,
    [items, checkedItemIds],
  );

  const handleRowClick = (id: string) => () => {
    onItemClick(id);
  };

  const handleCheckboxChange = (id: string) => (
    ev: React.ChangeEvent<HTMLInputElement>,
  ) => (ev.target.checked ? onItemChecked : onItemUnchecked)(id);

  const onBatchCheckboxChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
    (ev.target.checked ? onBatchChecked : onBatchUnchecked)();

  return (
    <Table>
      <Thead>
        <Tr>
          <Th w="50px">
            <Flex alignItems="center">
              <Checkbox
                size="lg"
                isChecked={isAllChecked}
                onChange={onBatchCheckboxChange}
              />
            </Flex>
          </Th>
          <Th>ID</Th>
          <Th>Pattern</Th>
          <Th>display</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map((item) => (
          <Row
            key={item.id}
            item={item}
            isChecked={checkedItemIds.has(item.id)}
            onClick={handleRowClick(item.id)}
            onCheckboxChange={handleCheckboxChange(item.id)}
          />
        ))}
      </Tbody>
    </Table>
  );
};

export default EnvItemTable;
