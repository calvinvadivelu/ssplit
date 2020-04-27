import React, { useState } from 'react';

import './ListItem.scss';

const ListItem = ({ item, active, setActivePlan }) => {
    const [expanded, showPlans] = useState(false)

    const numPlans = item.plans ? item.plans.length : 0;

    const handleClick = () => {
        if (numPlans) {
            showPlans(!expanded)
            if (!expanded) document.addEventListener('click', closePlans)
        }
        else setActive()
    }

    const closePlans = (e) => {
        if (!e.target.className.includes('listitem-plans__plan')) {
            showPlans(false);
            document.removeEventListener('click', closePlans)
        }
    }


    const setActive = (plan = {planName: '', pricePerMonth: item.pricePerMonth}) => {
        const activePlan = {
            id: item.id,
            subscriptionName: item.name,
            description: item.description,
            picture:  item.picture,
            planName: plan.planName,
            pricePerMonth: plan.pricePerMonth
        }
        setActivePlan(activePlan)
    }
    return (
        <>
        <div className='listitem' style={active ? {backgroundColor: 'blue'} : {}} onClick={handleClick}>
            <div className="listitem-image">
                <img src={item.picture} height={70} width={70} alt=""/>
            </div>
            <div className="listitem-details">
                <div className="listitem-details__name">{item.name}</div>
                <div className="listitem-details__description"><p>{item.description}</p></div>
            </div>
        </div>
        <div className="listitem-plans" style ={expanded ? { margin: '16px 12px 12px', display: 'flex', height: '40px' } : { margin: 0, height: '0'}}>
            {expanded && 
                item.plans.map((plan, idx) => (
                    <div key={idx} className="listitem-plans__plan" onClick={() => setActive(plan)} style={{width: `${90/numPlans}%`, backgroundColor: `${active === plan.planName ? 'green' : ''}` }} >
                        {plan.planName}
                    </div>
                ))
            }
        </div>
        </>
    );
};

export default ListItem;