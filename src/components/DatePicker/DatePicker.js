import React from 'react';
import NUM_SOUNDS from '../../constants/NUM_SOUNDS';
import './DatePicker.scss';
const DatePicker = ({ payoutDate, setPayoutDate }) => {
    const days = [];
    for(let i = 1; i <= 31 ; ++i){
        days.push(i)
    }

    let payoutMessage = ''
    if (payoutDate > 28) payoutMessage = <p>You will get an email about the PayPal deposit on the {payoutDate}<sup>{NUM_SOUNDS[payoutDate]}</sup> or the last day of the month`</p>
    else if (payoutDate === 1) payoutMessage = <p>You will get an email about the PayPal deposit on the first of every month</p>
    else payoutMessage = <p>You will get an email about the PayPal deposit on the {payoutDate}<sup>{NUM_SOUNDS[payoutDate-1]}</sup> of every month</p>

    return (
        <div className='datepicker'>
            <label htmlFor="date">On what day of the month would you like to have the money deposited?</label>
            <div className="datepicker-grid">
                {days.map(day => (
                    <input key={day} type="button" onClick={() => setPayoutDate(day)} className={`datepicker-grid__day ${payoutDate===day && 'activeDay'}`} value={day}/>
                ))}
            </div>
            <div className="datepicker-payoutmessage">
                {payoutMessage}
            </div>
        </div>
    );
};

export default DatePicker;