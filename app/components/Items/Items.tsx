import React from 'react';
import ItemType from '../../types/ItemType';
import Item from '../Item/Item';
import './Items.scss';

type PropType = {
  title: string;
  items: ItemType[];
  onCheckOff: (item: ItemType) => void;
};

export default function Items({
  title,
  items,
  onCheckOff,
}: PropType): JSX.Element {
  return (
    <section>
      <h2>{title}</h2>
      {items.map((item) => (
        <Item key={item.id} onCheckOff={() => onCheckOff(item)} {...item} />
      ))}
    </section>
  );
}
