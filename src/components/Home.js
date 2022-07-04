import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ExitOutline } from 'react-ionicons';
import { AddCircleOutline } from 'react-ionicons';
import { RemoveCircleOutline } from 'react-ionicons';


export default function Home () {

    const navigate = useNavigate();

    return (
        <HomeDiv>
            <Header>
                <h1>Olá, Usuário</h1>
                <IoIcon1
                    color={'white'} 
                    height="23px"
                    width="23px"
                />
            </Header>
            <History>
                <div>
                    <p>Não há registros de entrada ou saída</p>
                </div>
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
    height: calc(100% - 114px);
    width: 100%;
    padding: 15px;
    background: #FFFFFF;
    border-radius: 5px;

    > div {
        display: flex;
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