import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from "LogIn";
import SignIn from './SignIn';
import Home from './Home';
import NewEntry from './NewEntry';
import NewExpense from './NewExpense';


export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/home' element={<Home />} />
                <Route path='/newentry' element={<NewEntry />} />
                <Route path='/newexpense' element={<NewExpense />} />
            </Routes>
        </BrowserRouter>
    );
}