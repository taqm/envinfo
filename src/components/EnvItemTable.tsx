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

type Props = {
  items: ReadonlyArray<EnvDataItem>;
  checkedItemIds: ReadonlySet<string>;
  onItemChecked: (id: string) => void;
  onItemUnchecked: (id: string) => void;
  onBatchChecked: () => void;
  onBatchUnchecked: () => void;
};

type RowProps = {
  item: EnvDataItem;
  isChecked: boolean;
  onCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Row: React.VFC<RowProps> = ({ item, isChecked, onCheckboxChange }) => {
  return (
    <Tr
      key={item.id}
      cursor="pointer"
      bg={isChecked ? 'green.50' : undefined}
      _hover={{ boxShadow: 'lg' }}
    >
      <Td>
        <Flex alignItems="center">
          <Checkbox
            size="lg"
            isChecked={isChecked}
            onChange={onCheckboxChange}
          />
        </Flex>
      </Td>
      <Td>{item.id}</Td>
      <Td>{item.pattern}</Td>
      <Td>{item.label}</Td>
    </Tr>
  );
};

const EnvItemTable: React.VFC<Props> = ({
  items,
  checkedItemIds,
  onItemChecked,
  onItemUnchecked,
  onBatchChecked,
  onBatchUnchecked,
}) => {
  const isAllChecked = React.useMemo(
    () => items.length === checkedItemIds.size,
    [items, checkedItemIds],
  );

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
            onCheckboxChange={handleCheckboxChange(item.id)}
          />
        ))}
      </Tbody>
    </Table>
  );
};

export default EnvItemTable;
