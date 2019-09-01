/**
 *
 * DashBoardSideBar
 *
 */

import React, { memo } from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import EmployeeWiz from './EmployeeWiz';
import './dashBoardSideBar.scss';

// import PropTypes from 'prop-types';

function DashBoardSideBar() {
  const employee = [
    {
      name: 'Vikkee Singh',
      designation: 'Field Worker',
    },
    {
      name: 'Vivek Singh',
      designation: 'Field Worker',
    },
    {
      name: 'Abhisek Singh',
      designation: 'Director',
    },
  ];
  return (
    <div className="sideBarContainer">
      <div className="searchBox">
        <Input
          placeholder="Search Employee"
          prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
      </div>
      <div className="employeeList">
        {employee.length &&
          employee.map((emp, i) => (
            <EmployeeWiz
              key={Number(i)}
              name={emp.name}
              designation={emp.designation}
            />
          ))}
      </div>
    </div>
  );
}

DashBoardSideBar.propTypes = {};

export default memo(DashBoardSideBar);
