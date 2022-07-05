import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';


export default function SignIn () {
    //SIGNIN FUNCTION

    const apiURL = 'http://localhost:5000/signin';
    const navigate = useNavigate();
    const [entry, setEntry] = useState({});
    const [disable, setDisable] = useState(false);

    function sendObject(event) {
        //CREATE LOGIN OBJECT AND PREVENTS NEW ENTRIES WHILE WAYTING FOR API'S RESPONSE
        event.preventDefault();
        
        setDisable(true);
        const promise = axios.post(apiURL, entry);
        promise.then(() => {
            setDisable(false);
            alert('Conta criada com sucesso!')
            navigate('/');
        });
        promise.catch(() => {
            setDisable(false);
            alert('Dados inválidos. Verifique suas entradas')
        });
    }

    return (
        <LogInDiv>
            <h1>MyWallet</h1>
            <form onSubmit={sendObject}>
                <input disabled={disable} type='text' placeholder='Nome' required onChange={(e) => setEntry({...entry, name: e.target.value})} value={entry.name} />
                <input disabled={disable} type='email' placeholder='E-mail' required onChange={(e) => setEntry({...entry, email: e.target.value})} value={entry.email} />
                <input disabled={disable} type='password' placeholder='Senha' required onChange={(e) => setEntry({...entry, password: e.target.value})} value={entry.password} />
                <input disabled={disable} type='password' placeholder='Confirme a senha' required onChange={(e) => setEntry({...entry, passwordConfirm: e.target.value})} value={entry.passwordConfirm} />
                <button disabled={disable} type='submit'>{disable === true? <ThreeDots color="white" height={80} width={80} />: 'Cadastrar'}</button>
            </form>
            <p onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</p>
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