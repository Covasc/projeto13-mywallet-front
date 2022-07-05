import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";


export default function NewEntry () {

    const apiURL = "http://localhost:5000/user/movimentation";
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const [entry, setEntry] = useState({type: "entry"});
    const [disable, setDisable] = useState(false);
    console.log(entry);

    function sendObject(event) {
        //CREATE LOGIN OBJECT AND PREVENTS NEW ENTRIES WHILE WAYTING FOR API'S RESPONSE
        event.preventDefault();

        const config = {headers: {Authorization: `Bearer ${userData.token}`}};
        
        setDisable(true);
        const promise = axios.post(apiURL, entry, config);
        promise.then(() => {
            setDisable(false);
            navigate('/home');
        });
        promise.catch(() => {
            setDisable(false);
            alert('Dados inválidos. Verifique suas entradas')
        });
    }

    return (
        <NewEntryDiv>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <form onSubmit={sendObject}>
                <input disabled={disable} type='number' placeholder='Valor' required onChange={(e) => setEntry({...entry, value: Number(e.target.value)})} value={entry.value} />
                <input disabled={disable} type='text' placeholder='Descrição' required onChange={(e) => setEntry({...entry, text: e.target.value})} value={entry.text} />
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
