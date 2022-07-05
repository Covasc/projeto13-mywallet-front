import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from '../contexts/UserContext';
import LogIn from "./LogIn";
import SignIn from './SignIn';
import Home from './Home';
import NewEntry from './NewEntry';
import NewExpense from './NewExpense';


export default function App () {

    const [ userData, setUserData ] = useState({});

    return (
        <UserContext.Provider value={{userData, setUserData}}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/home' element={<Home />} />
                <Route path='/newentry' element={<NewEntry />} />
                <Route path='/newexpense' element={<NewExpense />} />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}