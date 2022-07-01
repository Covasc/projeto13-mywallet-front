import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogIn () {

    const navigate = useNavigate();
    const [entry, setEntry] = useState();

    return (
        <LogInDiv>
            <h1>MyWallet</h1>
            <form>
                <input type='email' required onChange={entry => setEntry({email: entry.target.value})} value={entry.email} />
                <input type='password' required onChange={entry => setEntry({password: entry.target.value})} value={entry.password} />
                <button type='submit'>Entrar</button>
            </form>
            <p onClick={() => navigate('/signin')}>Primeira vez? Cadastre-se!</p>
        </LogInDiv>
    );
};

const LogInDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 326px;
`