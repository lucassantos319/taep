import React,{useState} from 'react';
import styled from 'styled-components';
import { Container, makeStyles } from '@material-ui/core';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import TelaEscopo from './planning/telaEscopo';
import TelaVerificaTec from './planning/telaVerificaTec';
import TelaDesafio from './planning/telaDesafio';
import TelaProjeto from './planning/telaProjeto';
import TelaMaterialApoio from './planning/telaMaterialApoio';
import 'rsuite/dist/rsuite.min.css';
import Steps from 'rsuite/Steps';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        '& > * + *': {
        marginTop: theme.spacing(3),
        },
    },
}));

const  TelaCriarProjeto = ({projects, usuario}) => {
    
    const classes = useStyles();
    const [cookies,setCookie] = useCookies(["user"])

    const router = useRouter();
    const [selectedOptionsDisciplinas, setSelectedOptionsDisciplinas] = useState([]);
    const [selectedOptionsTags, setSelectedOptionsTags] = useState([]);

    var escopo = {}

    const [step, setStep] = useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 6 ? 6 : nextStep);
    };
    
    return (
        <>
            <div style={{width:"85%",marginTop:"3rem",marginLeft:"5rem"}}>
                <Steps current={step}>
                    <Steps.Item title="Escopo"  />
                    <Steps.Item title="Verificação de tecnologia"  />
                    <Steps.Item title="Desafio Problema" />
                    <Steps.Item title="Definir Projeto" />
                    <Steps.Item title="Material de Apoio" />
                </Steps>
            </div>
            <div>
                <Container maxWidth="1" style={{marginTop:'65px'}}>

                    { step == 0 ? <TelaEscopo escopo={escopo} setStep={setStep} step={step}/>:null }
                    { step == 1 ? <TelaVerificaTec setStep={setStep} step={step}/>:null }
                    { step == 2 ? <TelaDesafio setStep={setStep} step={step}/>:null }
                    { step == 3 ? <TelaProjeto setStep={setStep} step={step}/>:null }
                    { step == 4 ? <TelaMaterialApoio setStep={setStep} step={step}/>:null }

                </Container>
            </div>
            <div style={{marginTop:"2rem"}}></div>


        </>
    )

};
export default TelaCriarProjeto;
