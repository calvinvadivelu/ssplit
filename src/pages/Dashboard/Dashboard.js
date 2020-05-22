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
                    <SubList subscriptions={currentUser.subscriptions} setActivePlan={setActivePlan} activePlan={activePlan}/>
                    <div className="dashboard__data-wall"/>
                    {activePlan !== null ? 
                        <SubOverview activeSubscription={currentUser.subscriptions[activePlan]}/>
                        :
                        <div className="dashboard__data-emptystate">ssplit a subscription or click on the left to see your active subscriptions</div>}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps, null)(Dashboard);