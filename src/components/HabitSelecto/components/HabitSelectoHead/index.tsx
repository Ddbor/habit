import React from 'react';

type Props = {
  className?: string;
  hourClassName?: string;
};

export const HabitSelectoHead: React.FC<Props> = ({
  className = '',
  hourClassName = '',
}) => {
  return (
    <>
      <ul className={className}>
        <li>00:00 - 06:00</li>
        <li>06:00 - 12:00</li>
        <li>12:00 - 18:00</li>
        <li>18:00 - 24:00</li>
      </ul>
      <ul className={hourClassName}>
        {Array.from({ length: 24 })
          .fill(undefined)
          .map((item, index) => (
            <li key={index}>{index}</li>
          ))}
      </ul>
    </>
  );
};
