import React, { CSSProperties, useEffect, useState } from 'react';
import './index.css';
import { HabitSelectoHead } from '../HabitSelectoHead';
import Selecto, { SelectoEvents, SelectoOptions } from 'selecto';
import { HabitSelectoWeek } from '../HabitSelectoWeek';

type Props = {
  /** selecto的配置 */
  options?: Partial<SelectoOptions>;
  /** selecto的事件 */
  events?: {
    [T in keyof Partial<SelectoEvents>]: (e: SelectoEvents[T]) => any;
  };
  className?: string;
  style?: CSSProperties;
  render: (weekIndex: number) => React.ReactNode;
};

export const HabitWeekTimeSelecto: React.FC<Props> = ({
  options = {},
  events,
  className = '',
  style,
  render,
}) => {
  const [selectoInstance, setSelectoInstance] = useState<Selecto>();
  const [container, setContainer] = useState<any>();

  useEffect(() => {
    if (!container) {
      return;
    }
    const instance = new Selecto({
      container,
      rootContainer: null,
      dragContainer: container,
      boundContainer: container,
      selectableTargets: ['li'],
      selectByClick: true,
      selectFromInside: true,
      continueSelect: false,
      toggleContinueSelect: 'shift',
      keyContainer: window,
      hitRate: 0,
      ...options,
    });

    setSelectoInstance(instance);
  }, [container]);

  useEffect(() => {
    if (selectoInstance && events) {
      const eventNames = Object.keys(events) as (keyof SelectoEvents)[];
      eventNames.forEach((eventName) => {
        selectoInstance.on(eventName, (events as any)[eventName]);
      });
    }
  }, [selectoInstance, events]);

  return (
    <div style={style} className={`habit-selecto-week ${className}`}>
      <HabitSelectoWeek />
      <div className="habit-selecto-week-right">
        <HabitSelectoHead
          className="habit-selecto-week-split"
          hourClassName="habit-selecto-week-hour"
        />
        <ul className="habit-selecto-week-cont" ref={setContainer}>
          {Array.from({ length: 7 })
            .fill(null)
            .map((item, index) => (
              <React.Fragment key={index}>{render(index)}</React.Fragment>
            ))}
        </ul>
      </div>
    </div>
  );
};
