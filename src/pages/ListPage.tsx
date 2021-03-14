import * as React from 'react';
import Card from '../components/Card';
import EnvItemTable from '../components/EnvItemTable';

import MainLayout from '../components/MainLayout';
import { EnvDataItem } from '../domains/EnvDataItem';

const genRandomItems = (): EnvDataItem[] => {
  const r = () => Math.trunc(256 * Math.random());
  const getDemoColor = (a: number) => `rgba(${r()}, ${r()}, ${r()}, ${a})`;

  return [...Array(10)].map((_, idx) => ({
    id: `test_${idx + 1}`,
    label: `テスト${idx + 1}`,
    order: idx,
    pattern: 'https?://example.local/.*',
    fontColor: getDemoColor(1),
    bgColor: getDemoColor(0.8),
  }));
};

const ListPage: React.VFC = () => {
  const items: ReadonlyArray<EnvDataItem> = React.useMemo(genRandomItems, []);
  const [checkedItemIds, setCheckedItemIds] = React.useState<
    ReadonlySet<string>
  >(new Set());

  const onItemChecked = React.useCallback(
    (id: string) =>
      setCheckedItemIds((prev) => {
        const newItem = new Set(prev);
        return newItem.add(id);
      }),
    [setCheckedItemIds],
  );

  const onItemUnchecked = React.useCallback(
    (id: string) => {
      setCheckedItemIds((prev) => {
        const nextItem = new Set(prev);
        nextItem.delete(id);
        return nextItem;
      });
    },
    [setCheckedItemIds],
  );

  const onBatchChecked = React.useCallback(
    () => setCheckedItemIds(new Set(items.map((item) => item.id))),
    [items, setCheckedItemIds],
  );

  const onBatchUnchecked = React.useCallback(
    () => setCheckedItemIds(new Set()),
    [items, setCheckedItemIds],
  );

  return (
    <MainLayout>
      <Card>
        <EnvItemTable
          items={items}
          checkedItemIds={checkedItemIds}
          onItemChecked={onItemChecked}
          onItemUnchecked={onItemUnchecked}
          onBatchChecked={onBatchChecked}
          onBatchUnchecked={onBatchUnchecked}
        />
      </Card>
    </MainLayout>
  );
};

ListPage.displayName = 'ListPage';

export default ListPage;
