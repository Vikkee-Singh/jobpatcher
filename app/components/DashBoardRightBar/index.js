/**
 *
 * DashBoardRightBar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './dashBoardRightBar.scss';
import JobsDesc from './JobsDesc';

function DashBoardRightBar() {
  const jobs = [
    {
      name: 'Vikkee Singh',
      icon: 'user',
      designation: 'Field Worker',
      type: 'UNSCHEDUALED',
    },
    {
      name: 'Vivek Singh',
      icon: 'bank',
      designation: 'Field Worker',
      type: 'UNSCHEDUALED',
    },
    {
      name: 'Abhisek Singh',
      icon: 'user',
      designation: 'Director',
      type: 'UNSCHEDUALED',
    },
  ];
  return (
    <div className="unScheduled">
      <div className="unscheduledheade"> 3 UNSCHEDULED JOBS</div>
      <div className="unsheduledList">
        {jobs.length &&
          jobs.map((job, i) => (
            <JobsDesc
              key={Number(i)}
              name={job.name}
              designation={job.designation}
              icon={job.icon || 'user'}
            />
          ))}
      </div>
    </div>
  );
}

DashBoardRightBar.propTypes = {};

export default memo(DashBoardRightBar);
