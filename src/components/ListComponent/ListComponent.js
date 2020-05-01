import React, { useState } from 'react';

import ListItem from './ListItem/ListItem';
import './ListComponent.scss';
/*
props.contents: {
    name: String,
    description: String,
    picture: url,
    pricePerMonth: Number
}
*/

const ListComponent = ({ contents, activePlan, setActivePlan }) => {
    const [search, updateSearch] = useState('')
    const [isPlansExpanded, setExpandedHeight] = useState(false)
    const listItems = contents.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
    return (
        <div className="listbox">
            <label className="listbox-label">
            What is the subscription service you are sharing?
            </label>
            <div className="listbox-searchbox">
                <input type="search" value={search} onChange={(e) => updateSearch(e.target.value)} />
            </div>
            <div className='listbox-contents' style={{height: `${((listItems.length) * 82) + isPlansExpanded * 68}px`}}>
                {listItems.map((item, idx) => {
                    let active = false
                    if (activePlan.subscriptionName === item.name){
                        active = activePlan.planName ? activePlan.planName : true
                    }
                    return <ListItem key={idx} item={item} active={active} setExpandedHeight={setExpandedHeight} setActivePlan={setActivePlan}/>
            })}
            </div>
        </div>
    );
};

export default ListComponent;