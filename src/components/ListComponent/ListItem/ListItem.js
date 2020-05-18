import React, { useState, useEffect } from 'react';

import './ListItem.scss';

const ListItem = ({ item, active, setExpandedHeight, setActivePlan }) => {
    const [expanded, showPlans] = useState(false)

    const numPlans = item.plans ? item.plans.length : 0;

    const handleClick = (e) => {
        e.preventDefault();
        if (numPlans) {
            showPlans(!expanded)
            if (!expanded) document.addEventListener('click', closePlans)
        }
        else setActive()
    }

    const handlePlanClick = (e, plan) => {
        e.preventDefault();
        setActive(plan)
    }

    useEffect(() => {
        if (expanded) setTimeout(() => setExpandedHeight(expanded), 0)
        else setExpandedHeight(expanded)
    }, [expanded, setExpandedHeight])

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
        <button className='listitem__btncontainer' onClick={handleClick}>
            <div className='listitem' style={active ? {backgroundColor: 'blue'} : {}}>
                <div className="listitem-image" style={{backgroundColor: item.colourCode}}>
                    <img src={item.picture} alt=""/>
                </div>
                <div className="listitem-details">
                    <div className="listitem-details__name">{item.name}</div>
                    <div className="listitem-details__description"><p>{item.description}</p></div>
                </div>
            </div>
        </button>
        <div className="listitem-plans" style ={expanded ? { margin: '8px 12px 12px', display: 'flex', height: '40px' } : { margin: 0, height: '0'}}>
            {expanded && 
                item.plans.map((plan, idx) => (
                    <button key={idx} className="listitem-plans__plan" onClick={(e) => handlePlanClick(e, plan)} style={{width: `${90/numPlans}%`, backgroundColor: `${active === plan.planName ? 'green' : ''}` }} >
                        {plan.planName}
                    </button>
                ))
            }
        </div>
        </>
    );
};

export default ListItem;