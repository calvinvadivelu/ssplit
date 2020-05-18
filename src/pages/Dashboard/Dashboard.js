import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';

import Header from '../../components/Header/Header';
import SubList from './SubList/SubList';
import SubOverview from './SubOverview/SubOverview';

import './Dashboard.scss';
const Dashboard = ({ currentUser }) => {
    const [ activePlan, setActivePlan ] = useState(null)
    console.log('currentUser.subscriptions :>> ', currentUser.subscriptions);
    return (
        <div className='logged-in-page'>
            <Header/>
            <div className="dashboard">
                <h1>Your Subscriptions</h1>
                <div className="dashboard__data">
                    <SubList subscriptions={currentUser.subscriptions} setActivePlan={setActivePlan}/>
                    <SubOverview activeSubscription={currentUser.subscriptions[activePlan]}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
  
export default connect(mapStateToProps, null)(Dashboard);