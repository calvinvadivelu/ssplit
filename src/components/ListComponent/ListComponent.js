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

    const listItems = contents.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))

    return (
        <div className="listbox">
            <div className="listbox-searchbox">
                <input type="search" value={search} onChange={(e) => updateSearch(e.target.value)} />
            </div>
            <div className='listbox-contents'>
                {listItems.map((item, idx) => {
                    let active = false
                    if (activePlan.subscriptionName === item.name){
                        active = activePlan.planName ? activePlan.planName : true
                    }
                    return <ListItem key={idx} item={item} active={active} setActivePlan={setActivePlan}/>
            })}
            </div>
        </div>
    );
};

export default ListComponent;