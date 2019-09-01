/**
 *
 * DashboardHeader
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout, Button, Radio } from 'antd';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './dashboardHeader.scss';

function DashboardHeader() {
  return (
    <Layout.Header>
      <div className="headerCol">
        <div className="headerLeft">
          <Button icon="left" />
          <Button>July 11 - Today</Button>
          <Button icon="right" />
        </div>
        <div className="headerLeft">
          <Radio.Group defaultValue="Day">
            <Radio.Button value="Day">Day</Radio.Button>
            <Radio.Button value="Week">Week</Radio.Button>
            <Radio.Button value="Month">Month</Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className="headerCol">
        <div className="headerRight">
          <Button>
            Scheduled
            <span className="box blue">3</span>
          </Button>
          <Button>
            Unscheduled
            <span className="box red">3</span>
          </Button>
        </div>
        <div className="headerRight">
          <Button type="primary" icon="plus">
            Now job
          </Button>
        </div>
      </div>
    </Layout.Header>
  );
}

DashboardHeader.propTypes = {};

export default memo(DashboardHeader);
