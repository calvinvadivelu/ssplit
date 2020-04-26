import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { createSubscription } from '../../api/paypal.api';
import { sendEmails } from '../../api/email.api';

import SUB_DATA from '../../constants/SUB_DATA';
import ListComponent from '../../components/ListComponent/ListComponent';

import './NewSubscription.scss';
const NewSubscription = ({ currentUser }) => {
    const [sharers, editSharers] = useState([{ name: '', email: '' }])
    const [payoutDate, setPayoutDate] = useState('1')
    const [activePlan, setActivePlan] = useState({})

    const addSharer = () => {
        let newSharers = [...sharers]
        const lastSharer = newSharers[newSharers.length-1]
        if (!lastSharer.email || !lastSharer.name) return;
        newSharers.push({ name: '', email: '' })
        editSharers(newSharers)
    }

    const editSharerName = (newName, index) => {
        let newSharers = [...sharers]
        newSharers[index] = {name: newName, email: newSharers[index].email}
        editSharers(newSharers)
    }
    const editSharerEmail = (newEmail, index) => {
        let newSharers = [...sharers]
        newSharers[index] = {name: newSharers[index].name, email: newEmail}
        editSharers(newSharers)
    }
    const submitSubscription = (e) => {
        e.preventDefault();
        if (!activePlan.name)  return;
        const pricePerPerson = activePlan.pricePerMonth/(sharers.length+1)
        const ownerInfo = {
            name: currentUser.fullName,
            email: currentUser.email
        }
        createSubscription(
            activePlan.name,
            activePlan.description,
            ownerInfo,
            'DIGITAL', "SOFTWARE",
            Number(activePlan.pricePerMonth),
            pricePerPerson,
            'USD',
            sharers,
            'EMAIL',
            currentUser.email,
            Number(payoutDate),
        ).then(res => {
            const planId = res.id
            sendEmails(sharers, currentUser.displayName, activePlan.name , `${window.location.href}/${planId}`)
        })
    }

    
    return (
        <div className='logged-in-page newsub'>
            <form action="submit" className="newsub__form">
                <div className="newsub__form-left">
                <ListComponent
                contents={SUB_DATA}
                activePlan={activePlan}
                setActivePlan={setActivePlan}
                />
                </div>
                <div className="newsub__form-right">
                    <div className="newsub__form-sharers">
                        <label htmlFor="subscription-sharers">Who are you planning on sharing this subscription with?</label>
                        <div className='newsub__form-sharers__container'>
                            <div className="newsub__form-sharers__container-labels">
                                <label htmlFor="sharers-name">Name</label>
                                <label htmlFor="sharers-email">Email</label>
                            </div>
                            {sharers.map((sharer, key) => 
                                <div className="newsub__form-sharers__container-person" key={key}>
                                    <input type="text" autoComplete="new-password" id='sharers-name' className='newsub__form-sharers__container-person-name' value={sharer.name} onChange={(e) => editSharerName(e.target.value, key)}/>
                                    <input type="email" autoComplete="new-password" id='sharers-email' className='newsub__form-sharers__container-person-email'value={sharer.email} onChange={(e) => editSharerEmail(e.target.value, key)}/>
                                </div>
                            )}
                        </div>
                        <button type='button' onClick={addSharer}>Add Another Sharer?</button>
                    </div>
                    <div className="newsub__form-date">
                        <label htmlFor="date">On what day of the month would you like to have the money deposited?</label>
                        <br/>
                        <input type="number" max='31' min='1' id='date' onChange={(e) => setPayoutDate(e.target.value)} value={payoutDate}/>
                    </div>
                    <button type="submit" onClick={submitSubscription}>Done</button>
                </div>
            </form>
        </div>
    );
};
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
export default connect(mapStateToProps, null)(NewSubscription);