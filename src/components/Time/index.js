import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './styles.scss';

const Time = () => {
  const format = 'hh:mm:ss';
  const now = moment();
  const beforeTime = moment('18:55:00', format);
  const afterTime = moment('19:05:00', format);

  const maintenanceHours = now.isBetween(beforeTime, afterTime);

  const [minutes, setMinutes] = useState(moment.duration(now.diff(afterTime)).asMinutes());

  useEffect(() => {
    setMinutes(moment.duration(now.diff(afterTime)).asMinutes());
  });

  return (
    <div className="maintenance">
      {maintenanceHours && (
        <div>
          <p className="maintenance__time maintenance__time--modifier">We are currently processing rewards</p>
          <p className="maintenance__time">Back to business in {minutes.toFixed(2).substring(1)} min(s)</p>
        </div>
      )}
    </div>
  );
};

export default Time;
