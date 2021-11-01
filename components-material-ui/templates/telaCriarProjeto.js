import React,{useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid, Container, TextField, Button, Chip, makeStyles, TextareaAutosize } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';
import ProgressBar from './progressBar';
import TelaEscopo from './planning/telaEscopo';
import TelaVerificaTec from './planning/telaVerificaTec';
import TelaDesafio from './planning/telaDesafio';
import TelaProjeto from './planning/telaProjeto';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        '& > * + *': {
        marginTop: theme.spacing(3),
        },
    },
}));

const TelaCriarProjeto = ({projects, usuario}) => {
    
    const classes = useStyles();
    const [cookies,setCookie] = useCookies(["user"])

    const router = useRouter();
    const [selectedOptionsDisciplinas, setSelectedOptionsDisciplinas] = useState([]);
    const [selectedOptionsTags, setSelectedOptionsTags] = useState([]);

    const handleChangeTags = (event, value) => setSelectedOptionsTags(value);
    const handleChangeDisciplinas = (event, value) => setSelectedOptionsDisciplinas(value);

    const onSubmit = async (data) => {
        
        try{
          
            const url = "https://taep-backend.herokuapp.com/project/createProjects";
            var data = {
               
                "title":data.title,
                "turma":data.turma,
                "disciplina":data.disciplina,
                "description":data.description,
                "tecnologias":data.tecnologias,
                "objective":data.objetivo,
                "material_apoio":data.material_apoio,
                "userId":cookies.user.data.id,
                "disciplinas_relacionais":[],
                "tags":[]
            };

            data["disciplinas_relacionais"] = selectedOptionsDisciplinas;
            data["tags"] = selectedOptionsTags;

            console.log(data);
            const projectData = await axios.post(url,data)   
            .then(response => response.data);
         
            alert("Projeto criado com sucesso !");

            router.prefetch("/meus-projetos");
            router.push("/meus-projetos");
            // }
            
        }
        catch(error){
            alert(error.message);
        }
    }

    // const disciplinas = [
    //     { disciplina: 'Biologia' },
    //     { disciplina: 'Espanhol' },
    //     { disciplina: "Física" },
    //     { disciplina: 'Geografia' },
    //     { disciplina: 'História' },
    //     { disciplina: 'Informática' },
    //     { disciplina: 'Inglês' },
    //     { disciplina: 'Matemática' },
    //     { disciplina: 'Português' },
    //     { disciplina: 'Química' },
    //     { disciplina: 'Outra...' },
    //   ];

    //   const competencias = [
    //     { competencia: 'Autoconhecimento'},
    //     { competencia: 'Autoestima'},
    //     { competencia: 'Autonomia'},
    //     { competencia: "Colaboração"},
    //     { competencia: 'Confiança'},
    //     { competencia: 'Empatia'},
    //     { competencia: 'Ética'},
    //     { competencia: 'Felicidade'},
    //     { competencia: 'Paciência'},
    //     { competencia: 'Responsabilidade'},

    //     { competencia: 'Agilidade Para Tomar Decisões' },
    //     { competencia: 'Empreendedorismo' },
    //     { competencia: 'Generalização' },
    //     { competencia: 'Interpretação' },
    //     { competencia: 'Pensamento Abstrato' },
    //     { competencia: 'Pensamento Crítico' },
    //     { competencia: 'Reflexão' },
    //     { competencia: 'Solução de Problemas' },

    //     { competencia: 'Gerenciar tempo' },
    //     { competencia: 'Liderança' },
    //     { competencia: 'Planejamento' },

    //     { competencia: 'Iniciativa'},
    //     { competencia: 'Criatividade'},
    //     { competencia: 'Inovação'},
    //     { competencia: 'Fluência de Ideias'},
    //     { competencia: 'Ética e Coerência'},

    //     { competencia: 'Negociação'},
    //     { competencia: 'Comunicação'},

    //     { competencia: 'Outra'},
    //   ];

    const {register,handleSubmit} = useForm()
    const [progressValue,setProgressValue] = useState(20);
    const [buttonDescription, setButtonText] = useState("Proximo")
    const [avanca,setAvanca] = useState(false);
    var escopo = {}
 
    return(

        <Tela>
            <ProgressBar progressValue={progressValue}/>
            <Container maxWidth="1" style={{marginTop:'80px',borderRadius:'20px',border:'1px solid black',paddingBottom:'60px'}}>

                { progressValue == 20 ? <TelaEscopo escopo={escopo}/>:null }
                { progressValue == (20*2) ? <TelaVerificaTec/>:null }
                { progressValue == (20*3) ? <TelaDesafio/>:null }
                { progressValue == (20*4) ? <TelaProjeto/>:null }
                { progressValue == (20*5) ? <TelaEscopo/>:null }

                <div style={{float:'right', marginTop:'15px'}}>
                    <Button onClick={()=>{ 
                        console.log("old => " + progressValue)
                        if ( progressValue != 100){
                            setProgressValue(progressValue+20)
                            console.log("new => " + progressValue)
                            console.log(escopo)
                        }
                        else{
                        
                            if ( !avanca ){
                                setProgressValue(progressValue+20)
                                setAvanca(true)
                                setButtonText("Concluir")
                            }
                            else
                                router.push('/meus-projetos');
                        }
                    }}>{buttonDescription}</Button>
                </div>    

                {progressValue != 20? 
                    <div style={{float:'left', marginTop:'15px'}}>
                        <Button onClick={()=>{ 
                            console.log(progressValue)
                            if ( progressValue > 20)
                                setProgressValue(progressValue-20)
                            console.log(progressValue)
                        }}>Retornar</Button>
                    </div> : null
                
                }
                                           
                
            </Container>
        </Tela>
    )
};
export default TelaCriarProjeto;



const Tela = styled.div`
    padding: 12px;
`


