import * as React from 'react';

import CITIES from '../data/cities.json';

export default function ControlPanel(props) {
  return (
	<div className="wrapper">
		{CITIES.map((city, index) => (
        <div key={`btn-${index}`} className="input">
          <input
            type="radio"
            name="city"
            id={`city-${index}`}
            defaultChecked={city.city === 'Bangkok'}
            onClick={() => props.onSelectCity(city)}
          />
          <label htmlFor={`city-${index}`}>{city.city}</label>
        </div>
      ))}
    </div>
  );
}
