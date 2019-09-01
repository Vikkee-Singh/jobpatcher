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

function EmployeeWiz({ key, name, designation }) {
  return (
    <div key={key} className="employeebox">
      <div className="avatar">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
      <div className="empDisc">
        <h4>{name}</h4>
        <Text type="secondary">{designation}</Text>
      </div>
      <div className="empLine">
        <Icon type="line" />
      </div>
    </div>
  );
}

EmployeeWiz.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  designation: PropTypes.string,
};

export default memo(EmployeeWiz);
