import React from 'react';

import './SharerList.scss';

import verifyEmailField from '../../helper/verifyEmailField';
import userIcons from '../../images/userIcons';

const SharerList = ({ sharers, editSharer, removeSharer, addSharer }) => {
    const remove = (e, index) => {
        e.preventDefault();
        removeSharer(index)
    }

    const handleAddSharer = () => {
        let sharersAreGood = true
        editSharer(sharers.map(sharer => {
            if (!verifyEmailField(sharer.email)) {
                sharer.emailError = true
                sharersAreGood = false
            }
            if (sharer.name.length === 0){
                sharer.nameError = true
                sharersAreGood = false
            }
            return sharer
        }))
        if (sharersAreGood) addSharer()
    }

    const handleEditSharer = (sharer, fieldType, index) => {
        // if (sharers[index][fieldType]) sharers[index][fieldType] = false
        editSharer(sharer, index)
    }
    return (
        <div className="sharerslist">
            <label htmlFor="sharerslist-label">Who are you planning on sharing this subscription with?</label>
            <div className="sharerslist-content" style={{height : sharers.length * 82 + 16 + 'px'}}>
                {sharers.map((sharer, key) => 
                    <div className="sharerslist-content-sharer" key={key}>
                        <div className="sharerslist-content-sharer__img" style={{backgroundImage: `url(${userIcons[key]})`}}></div>
                        <div className="sharerslist-content-sharer__details">
                            <div className="sharerslist-content-sharer__details-name">
                                <input type="text"  className={`${sharer.nameError && 'invalid'}`} autoComplete="new-password" id='sharer-name' placeholder='Name' value={sharer.name} onChange={(e) => handleEditSharer({name: e.target.value, email: sharer.email}, 'nameError', key)}/>
                            </div>
                            <div className="sharerslist-content-sharer__details-email">
                                <input type="email" className={`${sharer.emailError && 'invalid'}`} autoComplete="new-password" id={'sharer-email'} placeholder='Email' value={sharer.email} onChange={(e) => handleEditSharer({name: sharer.name, email: e.target.value}, 'emailError', key)}/>
                            </div>
                        </div>
                        <div className="sharerslist-content-sharer__delete">
                            {sharers.length > 1 && <button onClick={(e) => remove(e, key)}>X</button>}
                        </div>
                    </div>
                )}
            </div>
            {sharers.length < 5 && <button type='button' onClick={handleAddSharer}>Add Another Sharer?</button>}
        </div>
    );
};

export default SharerList;