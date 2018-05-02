// =========================| Board level |========================= //



//--------------------------| Import

import React from 'react';
import Switch from '../../atoms/switch';
import './board-level.scss';


//--------------------------| Body

const BoardLevel = props => (
  <div className='pm-board-level'>
    {
      props.switchers.map((switcher, index) => (
        <div key={index} className="pm-board-level--item">
          <Switch
            handleClick={props.handleSelection}
            {...switcher}
          />
        </div>
      ))
    }
  </div>
);


//--------------------------| Export

export default BoardLevel;
