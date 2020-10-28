import React, { useContext, useEffect} from 'react';
import { Route } from 'react-router-dom';
import './Form.scss';
import { UserInfoContext } from '../../App';

export default function Form () {
    const blockName = 'form';
    const {state , setState} = useContext(UserInfoContext);

    useEffect(() => {
        document.title = `Hello ${state.name.value} ${state.lastName.value}` 
    }, [state.name, state.lastName]);
    
    const info = 
    [
        {
            label: state.name.label,
            func: ({target:{value}}) => setState({...state,  name: {...state.name , value}}),
        },
        {
            label: state.lastName.label,
            func: ({target:{value}}) => setState({...state, lastName: {...state.lastName, value}}),
        },
        {
            label: state.age.label,
            func: ({target:{value}}) => setState({...state, age: {...state.age, value}}),
        },
        {
            label: state.gender.label,
            func: ({target:{value}}) => setState({...state, gender: {...state.gender, value}}),
        }
    ];

    return ( 
        <div className = {blockName}>
            <h1>Please fill the following information</h1>
            
            {info.map((item, key) =>  
                <div className = {`${blockName}__input`} key={`div_${key}`}>
                    <span key={`span_${key}`}>{item.label}</span>
                    <input key={`input_${key}`}onChange={item.func}/>
                </div>
            )}
            
            <Route render={({ history }) => {               
                return <button 
                            className={`${blockName}__send-button`}
                            onClick={() => { history.push('/ConfirmationPage') }}
                        >
                            Send
                        </button>
                } 
            } />
        </div>
    );
}