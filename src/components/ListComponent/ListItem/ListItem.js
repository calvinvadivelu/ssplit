import React, { useState } from 'react';

import './ListItem.scss';

const ListItem = ({ item, setActivePlan }) => {
    const [expanded, showPlans] = useState(false)

    const numPlans = item.plans ? item.plans.length : 0;

    const handleClick = () => {
        if (numPlans) showPlans(!expanded)
        else setActive()
    }

    const setActive = (plan = {planName: '', pricePerMonth: item.pricePerMonth}) => {
        const activePlan = {
            id: item.id,
            name: item.name,
            description: item.description,
            picture:  item.picture,
            planName: plan.planName,
            pricePerMonth: plan.pricePerMonth
        }
        setActivePlan(activePlan)
    }
    return (
        <>
        <div className='listitem' onClick={handleClick}>
            <div className="listitem-image">
                img
            </div>
            <div className="listitem-details">
                <div className="listitem-details__name">{item.name}</div>
                <div className="listitem-details__description"><p>{item.description}</p></div>
            </div>
        </div>
        { expanded &&
            <div className="listitem-plans">
                {item.plans.map((plan, idx) => {
                    return (
                        <div key={idx} className="listitem-plans__plan" onClick={() => setActive(plan)} style={{width: `${90/numPlans}%`}} >
                            {plan.planName}
                        </div>
                    )
                })}
            </div>
         }
        </>
    );
};

export default ListItem;