import React, { useContext } from 'react';
import { UserInfoContext } from '../../App';
import './ConfirmationPage.scss';

export default function ConfirmationPage() {
    const blockName = 'confirmation-page';
    const { state } = useContext(UserInfoContext);

    return(
        <div className={blockName}>
            <h1>We have received this information</h1>
            {Object.keys(state).map((key) => {
                return (
                    <div className={`${blockName}__item`}> 
                        <span>{state[key].label}</span> 
                        <span className={`${blockName}__item-value`}>
                            {state[key].value}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}