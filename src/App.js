import React, {createContext , useState} from "react";
import { Route, BrowserRouter as Router , Switch} from 'react-router-dom';
import { Form, ConfirmationPage } from './Components';

export const UserInfoContext = createContext(null);
export default function App() {
    const [ state, setState ] = useState({
        name: {
            value: '',
            label: 'Name' 
        },
        lastName: {
            value: '', 
            label: 'Last Name' 
        },
        age: { 
            value: '', 
            label: 'Age' 
        },
        gender: { 
            value: '', 
            label:'Gender' 
        }
    });

    return(
        <Router>
            <Switch>
                <UserInfoContext.Provider value = {{state, setState}}>
                    <Route path="/" exact>
                        <Form/>
                    </Route>
                    <Route path="/ConfirmationPage">
                        <ConfirmationPage/>
                    </Route>
                </UserInfoContext.Provider>
            </Switch>
        </Router>
    )
}