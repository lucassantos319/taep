import styled, { keyframes } from 'styled-components';
import FormularioLogin from '../organism/formularioLogin';
import Image from 'next/image'

import logo from '../../public/img/logo-taep.png'

const colors = keyframes`
    0%{
        background-position 0% 50%;
    }
    
    50%{
        background-position 100% 50%;
    }

    100%{
        background-position 0% 50%;
    }
`

const Tela = styled.div`
    height: 100vh;
    position: relative;

    display: flex;
    justify-content: center;

    
    //criação do backgournd gradiente (animado????)
    background: linear-gradient(45deg, #142850, #27496D, #0C7B93, #00A8CC);
    background-size: 300% 300%;
    animation: ${colors} 10s ease infinite;
`

const BoxInputLogin = styled.div`
    background-color: ;
    max-width: 500px;
    max-height: 600px;
    padding: 36px;
    background-color: #FFF;

    border-radius: 12px;
    box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.5);

    //pra centralizar verticalmente
    position: absolute;
    top: 35%;
    transform: translateY(-50%);

    .h1{
        margin: 12px 0 12px 0;
        text-align: center;
    }
    
    .centraliza{
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width : 0px) and (max-width : 767px){
        max-width: 300px;
        max-height: 600px;
        top: 50%;
    }
`
const TelaLogin = ({}) => {
    return(
        <Tela>
            <BoxInputLogin>
                <div className="centraliza">
                    <Image height={120} width={120} src={logo}></Image>
                </div>
                <h1 className="h1">Bem-vindo ao TAEP 4.0</h1>
                <FormularioLogin />
            </BoxInputLogin>
        </Tela>
    )   
};
export default TelaLogin;
