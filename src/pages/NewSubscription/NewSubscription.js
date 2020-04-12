import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { createSubscription } from '../../api/paypal.api';
import { sendEmails } from '../../api/email.api';

import './NewSubscription.scss';
const NewSubscription = ({ currentUser }) => {
    const [sharers, editSharers] = useState([{ name: '', email: '' }])
    const [subscriptionName, setSubscriptionName] = useState('')
    const [subscriptionDescription, setSubscriptionDescription] = useState('')
    const [subscriptionPrice, setSubscriptionPrice] = useState('')
    const options = [
        { label: 'Netflix', value: 'netflix'},
        { label: 'Spotify', value: 'spotify'},
        { label: 'Hulu', value: 'hulu'},
        { label: 'Disney+', value: 'disneyplus'},
        { label: 'Amazon Prime', value: 'amazonprime'},
    ]
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
        if (subscriptionName === '' || subscriptionDescription === '')  return;
        createSubscription(subscriptionName, subscriptionDescription, { name: currentUser.fullName, email: currentUser.email }, 'DIGITAL', "SOFTWARE", Number(subscriptionPrice), sharers).then(res => {
            const planID = res.id
            sendEmails(sharers, currentUser.displayName, subscriptionName , `${window.location.href}/${planID}`).then(res => {
                console.log('res :', res);
            })
        })
    }


    console.log('subscriptionPrice :', subscriptionPrice);
    return (
        <div className='logged-in-page newsub'>
            <form action="submit" className="newsub__form">
                <div className="newsub__form-name">
                    <label htmlFor="subscription-name">What is the name of the Subscription Service you would like to share?</label>
                    <CreatableSelect
                        options={options}
                        onChange={option => setSubscriptionName(option.value)}
                        name='subscription-name'
                        placeholder='Name?'
                    />
                </div>
                <div className="newsub__form-description">
                    <label htmlFor="subscription-name" className='newsub__form-description-label'>Short description of what subscription is?</label>
                    <input type="text" name='subscription-name' className='newsub__form-description-input' onChange={(e) => setSubscriptionDescription(e.target.value)}/>
                </div>
                <div className="newsub__form-price">
                    <label htmlFor="subscription-price">What is the total price of your Subscription Service monthly?</label>
                    <NumberFormat
                        thousandSeparator={true}
                        decimalScale={2}
                        allowNegative={false}
                        placeholder='0.00'
                        prefix={'$'}
                        name='subscription-price'
                        displayType='input'
                        value={subscriptionPrice}
                        onValueChange={(values) => setSubscriptionPrice(values.value)}
                    />
                </div>
                <div className="newsub__form-sharers">
                    <label htmlFor="subscription-sharers">Who are you planning on sharing this subscription with?</label>
                    <div className='newsub__form-sharers__container'>
                        <div className="newsub__form-sharers__container-labels">
                            <label htmlFor="sharers-name">Name</label>
                            <label htmlFor="sharers-email">Email</label>
                        </div>
                        {sharers.map((sharer, key) => 
                            <div className="newsub__form-sharers__container-person" key={key}>
                                <input type="text" autoComplete="new-password" name='sharers-name' className='newsub__form-sharers__container-person-name' value={sharer.name} onChange={(e) => editSharerName(e.target.value, key)}/>
                                <input type="email" autoComplete="new-password" name='sharers-email' className='newsub__form-sharers__container-person-email'value={sharer.email} onChange={(e) => editSharerEmail(e.target.value, key)}/>
                            </div>
                        )}
                    </div>
                    <button type='button' onClick={addSharer}>Add Another Sharer?</button>
                </div>
                <button type="submit" onClick={submitSubscription}>Done</button>
            </form>
        </div>
    );
};
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
export default connect(mapStateToProps, null)(NewSubscription);