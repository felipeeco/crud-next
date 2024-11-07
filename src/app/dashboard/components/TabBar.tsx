'use client';

import { useState } from 'react';

interface Props {
  currentTab?: number;
  tabOptions?: number[]; 
}

export const TabBar = ({ currentTab=1, tabOptions= [1,2,3,4,5]}) => {

  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
  }

  return (
    <div className="flex w-full space-x-2 rounded-xl bg-gray-500 p-2">
      {tabOptions.map((tab) => (
        <div key={tab} className="flex-1">
          <input
            onChange={() => onTabSelected(tab)}
            checked={ selected === tab}
            type="radio" 
            id={tab.toString()} 
            className="peer hidden" />
          <label
            htmlFor={tab.toString()}
            className="block w-full cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};