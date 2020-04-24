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

const ListComponent = ({ contents, setActivePlan }) => {
    console.log('contents :>> ', contents);
    const [search, updateSearch] = useState('')

    return (
        <div className="listbox">
            <div className="listbox-searchbox">
                <input type="search" value={search} onChange={(e) => updateSearch(e.target.value)} />
            </div>
            <div className='listbox-contents'>
                {contents.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase())).map((item, idx) => <ListItem key={idx} item={item} setActivePlan={setActivePlan}/>)}
            </div>
        </div>
    );
};

export default ListComponent;