import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";


export default function NewEntry () {

    const apiURL = "";
    const navigate = useNavigate();
    const [entry, setEntry] = useState({});
    const [disable, setDisable] = useState(false);

    function sendObject(event) {
        //CREATE LOGIN OBJECT AND PREVENTS NEW ENTRIES WHILE WAYTING FOR API'S RESPONSE
        event.preventDefault();
        
        setDisable(true);
        const promise = axios.post(apiURL, entry);
        promise.then(() => {
            setDisable(true);
            navigate('/');
        });
        promise.catch(() => {
            setDisable(true);
            alert('Usuário ou senha incorretos')
        });
    }

    return (
        <NewEntryDiv>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <form onSubmit={sendObject}>
                <input disabled={disable} type='number' placeholder='Valor' required onChange={(entry) => setEntry({value: entry.target.value})} value={entry.name} />
                <input disabled={disable} type='text' placeholder='Descrição' required onChange={(entry) => setEntry({text: entry.target.value})} value={entry.email} />
                <button disabled={disable} type='submit'>{disable === true? <ThreeDots color="white" height={80} width={80} />: 'Salvar entrada'}</button>
            </form>
        </NewEntryDiv>
    );
}

const NewEntryDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 326px;
    font-family: 'Raleway', sans-serif;

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

`

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 27px 0;
    text-align: left;
    font-size: 26px;
    font-weight: 700;
`
