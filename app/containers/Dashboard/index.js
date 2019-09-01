/**
 *
 * Dashboard
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import DashBoardSideBar from 'components/DashBoardSideBar';
import DashboardHeader from 'components/DashboardHeader';
import DashBoardRightBar from 'components/DashBoardRightBar';
import TimeBoard from 'components/TimeBoard';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Layout } from 'antd';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import './dashboard.scss';

export function Dashboard() {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  // const [count, setCount] = useState(0);
  // const onclick

  return (
    <React.Fragment>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <Layout className="dashBoardLayout">
        <DashboardHeader />
        <Layout.Content>
          <TimeBoard />
        </Layout.Content>
        <DashBoardSideBar />
        <DashBoardRightBar />
      </Layout>
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Dashboard);
