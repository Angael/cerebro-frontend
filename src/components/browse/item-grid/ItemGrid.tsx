import React from 'react';
import clsx from 'clsx';

import { GridContainer } from './css';
import Item from '../item/Item';
import { IFrontItem } from '../../../model/IFrontItem';

type Props = {
  items: IFrontItem[];
  isFetching: boolean;
  onSelectItem: (id: number) => void;
};

const ItemGrid: React.FunctionComponent<Props> = ({
  items,
  isFetching,
  onSelectItem,
}) => {
  return (
    <GridContainer className={clsx({ isFetching })}>
      {items &&
        items.map((item, i) => (
          <Item
            key={item.id}
            item={item}
            onClick={() => onSelectItem(item.id)}
          />
        ))}
    </GridContainer>
  );
};

export default ItemGrid;
