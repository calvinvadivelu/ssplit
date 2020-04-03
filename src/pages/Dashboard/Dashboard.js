import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/user.selector';

import SubList from './SubList/SubList';
import SubOverview from './SubOverview/SubOverview';

import './Dashboard.scss';
const Dashboard = ({ currentUser, history }) => {
    return (
        <div className='logged-in-page'>
            <header className="dashboard__header" style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1 className="dashboard__header-title">
                    ssplit
                </h1>
                <Link style={{display: 'flex', alignItems: 'center'}} to='/new'>create new subscription +++</Link>
            </header>
            <div className="dashboard-hello">Hello {currentUser.displayName}</div>
            <SubList/>
            <SubOverview/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
  
export default connect(mapStateToProps, null)(Dashboard);