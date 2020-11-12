import React from 'react';
import './Item.scss';

type PropsType = {
  id: number;
  value: string;
  packed: boolean;
  onCheckOff: () => void;
};

export default function Item({
  id,
  packed,
  value,
  onCheckOff,
}: PropsType): JSX.Element {
  return (
    <article className="item">
      <label htmlFor={id.toString()}>
        <input
          id={id.toString()}
          type="checkbox"
          checked={packed}
          onChange={onCheckOff}
        />
        {value}
      </label>
    </article>
  );
}
