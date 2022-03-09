import React from 'react';

import { client } from '../../contentClient';

export const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {client.navigationItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};
