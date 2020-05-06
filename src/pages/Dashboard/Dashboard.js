import React from 'react';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { getUsersSubscriptions } from '../../api/paypal.api';

import Header from '../../components/Header/Header';
import SubList from './SubList/SubList';
import SubOverview from './SubOverview/SubOverview';

import './Dashboard.scss';
const Dashboard = ({ currentUser }) => {
    console.log('currentUser._id :>> ', currentUser._id);
    getUsersSubscriptions(currentUser._id)
    return (
        <div className='logged-in-page'>
            <Header/>
            <SubList/>
            <SubOverview/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
  
export default connect(mapStateToProps, null)(Dashboard);