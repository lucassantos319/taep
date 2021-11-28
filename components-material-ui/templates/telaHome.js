import styled, { keyframes } from 'styled-components';
import { Container, Grid, Box } from '@material-ui/core';

const TelaHome = ({}) => {
    return(
        <Tela>
            <Container maxWidth="md">
                <Box className="box-info">
                    <div className="div-centralizada">
                        <h1 className="texto-centralizado">Você conhece a plataforma TAEP4.0?</h1>
                        <h3 className="texto-centralizado">O vídeo abaixo pode te contar mais sobre o sistema</h3>
                    </div>
                </Box>

                <Box className="box-video">
                    <video  controls>
                        <source src="https://www.youtube.com/watch?v=rCZmH-NbCFI" type="video/mp4"></source>
                    </video>
                </Box>
            </Container>
        </Tela>
    )
};
export default TelaHome;

const Tela = styled.div`
    padding: 12px;
    height: 100%;

    .texto-centralizado{
        text-align: center;
    }

    .box-info{
        padding: 12px;
        border-radius: 12px;
        margin-top: 36px;
        min-height: 200px;

        background: linear-gradient(135deg, #142850, #27496D);
        box-shadow: 10px 10px 5px 0px rgba(0 ,0 ,0 , 0.7);
        color: #FFF;

        position: relative;
        display: flex;
        justify-content: center;
    }

    .div-centralizada{
        //pra centralizar verticalmente
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .box-video{
        padding: 12px;
        width: 100%;
        margin-top: 36px;

        display: flex;
        justify-content: center;

        video{
            height: 315px;
            width: 560px;
        }
    }
    @media screen and (min-width : 0px) and (max-width : 767px){
        h1{
            font-size: 22px;
        }
        h3{
            font-size: 14px;
        }
        video{
            height: 230px;
            width: 408px;
        }
    }
`

