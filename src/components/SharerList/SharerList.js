import React from 'react';

import './SharerList.scss';

import userIcons from '../../images/userIcons';

const SharerList = ({ sharers, editSharer, removeSharer }) => {
    const remove = (e, index) => {
        e.preventDefault();
        removeSharer(index)
    }
    return (
        <div className="sharerslist" style={{height : sharers.length * 82 + 16 + 'px'}}>
            {sharers.map((sharer, key) => 
                <div className="sharerslist-sharer" key={key}>
                    <div className="sharerslist-sharer__img" style={{backgroundImage: `url(${userIcons[key]})`}}></div>
                    <div className="sharerslist-sharer__details">
                        <div className="sharerslist-sharer__details-name">
                            <input type="text" autoComplete="new-password" id='sharer-name' placeholder='Name' value={sharer.name} onChange={(e) => editSharer({name: e.target.value, email: sharer.email}, key)}/>
                        </div>
                        <div className="sharerslist-sharer__details-email">
                            <input type="email" autoComplete="new-password" id='sharer-email' placeholder='Email' value={sharer.email} onChange={(e) => editSharer({name: sharer.name, email: e.target.value}, key)}/>
                        </div>
                    </div>
                    <div className="sharerslist-sharer__delete">
                        {sharers.length > 1 && <button onClick={(e) => remove(e, key)}>X</button>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SharerList;