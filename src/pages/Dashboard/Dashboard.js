import React from 'react';
import { connect } from 'react-redux';
// import Header from '../../components/Header/Header';
import { selectCurrentUser } from '../../redux/user/user.selector';

import SubList from './SubList/SubList';
import SubOverview from './SubOverview/SubOverview';

import './Dashboard.scss';
const Dashboard = ({ currentUser }) => {
    console.log('currentUser :', currentUser);
    return (
        <div className='dashboard'>
            <SubList/>
            <SubOverview/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
  
export default connect(mapStateToProps, null)(Dashboard);