import React, { useState } from 'react';

export default function Form () {
    const [ state, setState] = useState({name:'',lastName:'', age:'', gender:''});
    const info = 
    [
        {
            label: "Name",
            func: ({target:{value}}) => setState({...state, name: value}),
        },
        {
            label: "Last Name",
            func: ({target:{value}}) => setState({...state,lastName: value}),
        },
        {
            label: "Age",
            func: ({target:{value}}) => setState({...state, age: value}),
        },
        {
            label: "Gender",
            func: ({target:{value}}) => setState({...state, gender: value}),
        }
    ];

    return ( 
        <div>
            <h1>Please fill the following information</h1>
            {
                info.map((item, key) =>  
                    <div key={`div_${key}`}>
                        <span key={`span_${key}`}>{item.label}</span>
                        <input key={`input_${key}`}onChange={item.func}/>
                    </div>
                )
            }
            <button onClick={()=>{console.log('state', state)}}>Send</button>
        </div>
    );
}