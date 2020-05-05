import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/user.selector';

import Header from '../../components/Header/Header';
import SubList from './SubList/SubList';
import SubOverview from './SubOverview/SubOverview';

import './Dashboard.scss';
const Dashboard = () => {
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