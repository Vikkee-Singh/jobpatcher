/**
 *
 * TimeBoard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './timeBoard.scss';

function TimeBoard() {
  const timeToday = [
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 AM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM',
    '12 PM',
  ];
  return (
    <div className="horizontal-scroll-wrapper">
      <div className="displayDate">Sunday, july 11, 2019</div>
      <div className="timeRow">
        {timeToday.length &&
          timeToday.map((time, index) => (
            <div className="hourbox" key={Number(index)}>
              {time}
            </div>
          ))}
      </div>
      <div className="timeRow">
        {timeToday.length &&
          timeToday.map(time => (
            <div className="halfHourcontainer">
              <div className="timebox" />
              <div className="timebox" />
            </div>
          ))}
      </div>
      <div className="timeRow">
        {timeToday.length &&
          timeToday.map(time => (
            <div className="halfHourcontainer">
              <div className="timebox" />
              <div className="timebox" />
            </div>
          ))}
      </div>
    </div>
  );
}

TimeBoard.propTypes = {};

export default memo(TimeBoard);
