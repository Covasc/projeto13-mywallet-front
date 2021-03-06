import styled from 'styled-components';
import axios from "axios";
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';


// ========>  NÃO ESQUECER: CONFIGURAR UM CONTEXT PARA RECEBER O TOKEN DA API <=========
//PORQUE O <P /> NÃO PEGOU A CONFIG DO STYLE.CSS * {FONT-STYLE} ???? <=================
export default function LogIn () {
    //LOGIN FUNCTION

    const apiURL = 'http://localhost:5000/login';
    const navigate = useNavigate();
    const [entry, setEntry] = useState({});
    const [disable, setDisable] = useState(false);
    const { setUserData } = useContext(UserContext);

    function sendObject(event) {
        //CREATE LOGIN OBJECT AND PREVENTS NEW ENTRIES WHILE WAYTING FOR API'S RESPONSE
        event.preventDefault();
        
        setDisable(true);
        const promise = axios.post(apiURL, entry);
        promise.then((response) => {
            setUserData(response.data);
            setDisable(true);
            navigate('/home');
        });
        promise.catch(() => {
            setDisable(false);
            alert('Usuário ou senha incorretos')
        });
    }

    return (
        <LogInDiv>
            <h1>MyWallet</h1>
            <form onSubmit={sendObject}>
                <input disabled={disable} type='email' placeholder='E-mail' required onChange={(e) => setEntry({...entry, email: e.target.value})} value={entry.email} />
                <input disabled={disable} type='password' placeholder='Senha' required onChange={(e) => setEntry({...entry, password: e.target.value})} value={entry.password} />
                <button disabled={disable} type='submit'>{disable === true? <ThreeDots color="white" height={80} width={80} />: 'Entrar'}</button>
            </form>
            <p onClick={() => navigate('/signin')}>Primeira vez? Cadastre-se!</p>
        </LogInDiv>
    );
};

const LogInDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 326px;

    h1 {
        width: 100%;
        margin-bottom: 24px;
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        text-align: center;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        input {
            display: flex;
            align-items: center;
            padding: 15px;
            width: 100%;
            height: 58px;
            border-style: none;
            border-radius: 5px;
            margin-bottom: 15px;
            font-size: 20px;
            font-weight: 400;
            color: black;

            ::placeholder {
                opacity: 1;
                color: black;
            }
        }

        button {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-style: none;
            width: 100%;
            height: 46px;
            border-style: none;
            border-radius: 5px;
            margin-bottom: 36px;
            font-weight: 700;
            font-size: 20px;
            background: #A328D6;
        }
    }

    p {
        cursor: pointer;
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 15px;    
    }
`