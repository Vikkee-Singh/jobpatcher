/**
 *
 * DashBoardSideBar
 *
 */

import React, { memo } from 'react';
// import { Input } from 'antd';
import PropTypes from 'prop-types';
import Title from 'antd/lib/typography/Title';
import { Avatar, Icon } from 'antd';
import Text from 'antd/lib/typography/Text';

function JobsDesc({ key, name, designation, icon }) {
  return (
    <div key={key} className="jobbox">
      <div className="avatar">
        <Avatar icon={icon} />
      </div>
      <div className="jobDisc">
        <div className="jobTitle">
          <div>
            <h4>{name}</h4>
          </div>
          <div className="jobType">UNSCHEDUALED</div>
        </div>

        <Text type="secondary">{designation}</Text>
      </div>
    </div>
  );
}

JobsDesc.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  designation: PropTypes.string,
};

export default memo(JobsDesc);
