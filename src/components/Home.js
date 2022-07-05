import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExitOutline } from 'react-ionicons';
import { AddCircleOutline } from 'react-ionicons';
import { RemoveCircleOutline } from 'react-ionicons';


export default function Home () {

    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const apiURL = 'http://localhost:5000/user/movimentation'
    const [movimentationList, setMovimentationList] = useState([]);
    const [userName, setUserName] = useState("Usuário");
    const [active, setActive] = useState(true);
    console.log(active);

    function totalValue() {

        let total = 0;

        for (let i=0; i<movimentationList.length; i++) {
            if (movimentationList[i].type === "entry") {
                total = total + movimentationList[i].value;
            } else {
                total = total - movimentationList[i].value;
            }
        }
        return total;
    } 

    useEffect( () => {
        const config = {headers: {Authorization: `Bearer ${userData.token}`}}
        const promise = axios.get(apiURL, config);
        promise.then((response) => {
            setMovimentationList(response.data.movimentation);
            if (response.data.movimentation.length > 0) {
                setActive(false);
            }
            setUserName(response.data.name);
        });
    } , []);

    return (
        <HomeDiv>
            <Header>
                <h1>Olá, {userName}</h1>
                <IoIcon1
                    color={'white'} 
                    height="23px"
                    width="23px"
                />
            </Header>
            <History>
                <NoData active={active}>
                    <p>Não há registros de entrada ou saída</p>
                </NoData>
                <ul>
                    {movimentationList.map((register) => (
                        <li><div className="gray">{register.time}<span className="black">{register.text}</span></div><div className={register.type === "entry" ? "green" : "red"}>{register.value}</div></li>
                    ))}
                </ul>
                <TotalBar active={active}><span className="bold">SALDO</span><span className={totalValue() > 0 ? "green" : "red"}>R$ {totalValue()}</span></TotalBar>
            </History>
            <Footer>
                <Entry onClick={() => navigate('/newentry')}>
                    <IoIcon2
                        color={'#ffffff'} 
                        height="22px"
                        width="22px"
                    />
                    <div>
                        <p>Nova</p>
                        <p>entrada</p>
                    </div>
                </Entry>
                <div className="space"></div>
                <Expense onClick={() => navigate('/newexpense')}>
                    <IoIcon3
                        color={'#ffffff'} 
                        height="22px"
                        width="22px"
                    />
                    <div>
                        <p>Nova</p>
                        <p>saída</p>
                    </div>
                </Expense>
            </Footer>
        </HomeDiv>
    );
}

const IoIcon1 = styled(ExitOutline)`
    cursor: pointer;
`

const IoIcon2 = styled(AddCircleOutline)`
`

const IoIcon3 = styled(RemoveCircleOutline)`
`

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 326px;
    font-family: 'Raleway', sans-serif;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 27px 0;
    text-align: left;
    font-size: 26px;
    font-weight: 700;
`

const History = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-between;  
    height: calc(100% - 114px);
    width: 100%;
    padding: 15px;
    background: #FFFFFF;
    border-radius: 5px;

    ul {
        width: 100%;

        li {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin: 15px 0;

            > div {
                display: flex;
                font-size: 16px;
                color: black;
                
                span {
                    margin-left: 10px;
                }
            }
        }

        .gray {
            color: #c6c6c6; 
        }

        .black {
            color: black;
        }

        .red {
            color: #C70000;
        }

        .green {
            color: #03AC00;
        }

    }

`

const TotalBar = styled.div`
    display: ${(props) => (props.active ? "none" : "flex")};
    justify-content: space-between;

    .bold {
        color: black;
        font-weight: 700;
    }

    .green{
        color: #03AC00;
    }

    .red{
        color: #C70000;
    }
`

const NoData = styled.div`
    display: ${(props) => (props.active ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;

    p {
        max-width: 180px;
        font-size: 20px;
        color: #868686;
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 16px 0;
    font-size: 17px;
    font-weight: 700;

    .space {
        width: 15px;
    }
`

const Entry = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 114px;
    padding: 15px;
    background: #A328D6;
    border-radius: 5px;
`

const Expense = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 114px;
    padding: 15px;
    background: #A328D6;
    border-radius: 5px;
`