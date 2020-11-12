import React, { useState } from 'react';
import ItemType from '../../types/ItemType';
import Items from '../Items/Items';
import './Home.scss';

const initialState: ItemType[] = [
  { id: Date.now(), value: 'Pants', packed: false },
];

export default function Home(): JSX.Element {
  const [items, setItems] = useState(initialState);

  const addItem = (item: ItemType): void => {};

  const markAsPacked = (item: ItemType): void => {
    const otherItems: ItemType[] = items.filter(
      (other) => other.id !== item.id
    );
    const updatedItem: ItemType = { ...item, packed: !item.packed };
    setItems(() => [updatedItem, ...otherItems]);
  };

  const markAllAsUnpacked = (): void => {
    const unpacked = items.map((item) => ({ ...item, packed: false }));
    setItems(unpacked);
  };

  const unpackedItems = items.filter((item) => !item.packed);
  const packedItems = items.filter((item) => item.packed);

  return (
    <div className="home-page">
      <Items
        title="Unpacked Items"
        items={unpackedItems}
        onCheckOff={markAsPacked}
      />
      <Items
        title="Packed Items"
        items={packedItems}
        onCheckOff={markAsPacked}
      />
      <button type="button" className="full-width" onClick={markAllAsUnpacked}>
        Mark All As Unpacked
      </button>
    </div>
  );
}
