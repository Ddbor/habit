import React, { useEffect, useState } from 'react';
import './index.css';
import { HabitSelectoHead } from '../HabitSelectoHead';
import Selecto, { SelectoEvents, SelectoOptions } from 'selecto';

type Props = {
  /** selecto的配置 */
  options?: Partial<SelectoOptions>;
  /** selecto的事件 */
  events?: {
    [T in keyof Partial<SelectoEvents>]: (e: SelectoEvents[T]) => any;
  };
  /** item render */
  content: React.ReactNode;
};

export const HabitTimeSelecto: React.FC<Props> = ({
  options = {},
  events,
  content,
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
    <div className="habit-selecto">
      <HabitSelectoHead
        className="habit-selecto-split"
        hourClassName="habit-selecto-hour"
      />
      <ul className="habit-selecto-cont" ref={setContainer}>
        {content}
      </ul>
    </div>
  );
};
