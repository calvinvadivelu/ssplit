import React, { useState }  from 'react';

import { createSubscription } from '../../api/paypal.api';
import { sendEmails } from '../../api/email.api';

import verifyEmailField from '../../helper/verifyEmailField';
import SUB_DATA from '../../constants/SUB_DATA';

import ListComponent from '../ListComponent/ListComponent';
import SharerList from '../SharerList/SharerList';
import DatePicker from '../DatePicker/DatePicker';

import './NewSubscriptionForm.scss';

const NewSubscriptionForm = ({ currentUser, onSubscriptionCreated }) => {
    const [sharers, editSharers] = useState([{ name: '', email: '' }])
    const [payoutDate, setPayoutDate] = useState(1)
    const [activePlan, setActivePlan] = useState({})
    const [page, setPage] = useState(0)
    const addSharer = () => {
        let newSharers = [...sharers]
        const lastSharer = newSharers[newSharers.length-1]
        if (!lastSharer.email || !lastSharer.name) return;
        newSharers.push({ name: '', email: '' })
        editSharers(newSharers)
    }
    const removeSharer = (index) => {
        let newSharers = [...sharers]
        newSharers.splice(index, 1)
        editSharers(newSharers);
    }

    const editSharer = (newSharer, index) => {
        let newSharers = [...sharers]
        newSharers[index] = newSharer
        editSharers(newSharers)
    }
    const submitSubscription = (e) => {
        e.preventDefault();
        const pricePerPerson = activePlan.pricePerMonth/(sharers.length+1)
        const ownerInfo = {
            name: currentUser.fullName,
            email: currentUser.email,
            id: currentUser._id
        }
        createSubscription(
            activePlan.subscriptionName,
            activePlan.planName,
            activePlan.description,
            ownerInfo,
            'DIGITAL',
            "SOFTWARE",
            Number(activePlan.pricePerMonth),
            pricePerPerson,
            'USD',
            sharers,
            'EMAIL',
            currentUser.email,
            payoutDate,
            activePlan.id,
        ).then(res => {
            const planId = res.id
            sendEmails(sharers, currentUser.displayName, activePlan.name , `${window.location.href}/${planId}`)
            onSubscriptionCreated();
        })
    }

    const verifySharerFields = () => {
        let filled = true
        sharers.forEach(sharer => {
            if (sharer.name.length === 0 || !verifyEmailField(sharer.email))
                filled = false
        })
        return filled
    }

    const isNextVisible = () => {
        if (page === 0 && activePlan.planName && activePlan.pricePerMonth) {
            return true
        }
        else if(page === 1 && verifySharerFields()) {
            return true
        }
        else if (page === 2) {
            return true   
        }
        return false
    }

    return (
        <form action="" className="newsub__form">
            <div className="newsub__form-slideslice">
                <div className="newsub__form-slideslice__slider" style={{right: `${page * 650}px`}}>
                    <ListComponent
                    contents={SUB_DATA}
                    activePlan={activePlan}
                    setActivePlan={setActivePlan}
                    />
                    <SharerList
                    sharers={sharers}
                    editSharer={editSharer}
                    removeSharer={removeSharer}
                    addSharer={addSharer}
                    />
                    <DatePicker
                    payoutDate={payoutDate}
                    setPayoutDate={setPayoutDate}
                    />
                </div>
            </div>
            <div className="newsub__form-btns">
                {page > 0 && <input type="button" value="Back" onClick={() => setPage(page - 1)}/>}
                <div className="newsub__form-btns__placeholder"></div>
                {page < 2 && <input className={`newsub__form-btns__next ${isNextVisible() && 'active'}`} type="button" value="Next" onClick={() => isNextVisible() && setPage(page + 1)}/>}
                {page === 2 && <button type="submit" onClick={submitSubscription}>Done</button>}
            </div>
        </form>
    );
};

export default NewSubscriptionForm;