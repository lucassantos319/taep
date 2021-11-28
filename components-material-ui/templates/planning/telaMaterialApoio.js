import React from 'react'
import { Button } from 'react-bootstrap';
import {useRouter} from 'next/router';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const TelaMaterialApoio = ({setStep,step}) => {
    
    const router = useRouter();
    const [cookies,setCookie] = useCookies(["user"])

    const onSubmit = async (escopo,recurso,projetoInfo) => {
        
        try{
           
            const url = "https://taep-backend.herokuapp.com/project/createProjects";
            var data = {
                "disciplinas":escopo.disciplinas,
                "ods":escopo.ods,
                "steam":escopo.steam,
                "skills":escopo.skills,
                "tecnologias":recurso.tecRadio,
                "title":projetoInfo.title,
                "turma":projetoInfo.turma,
                "description":projetoInfo.description,
                "objective":projetoInfo.objective,
                "userId":cookies.user.data.id,
            };
            
            const projectData = await axios.post(url,data)   
            .then(response => response.data);
         
            if (projectData)
            alert("Projeto criado com sucesso !");
            
            router.prefetch("/meus-projetos");
            router.push("/meus-projetos");
            
            
        }
        catch(error){
            alert(error.message);
        }
    }
    
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 6 ? 6 : nextStep);
    };
    
    return (
        <>
            <div>
                <div style={{textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>
                    <h3>Preparar material de apoio</h3>
                </div>
                <div>
                    <p>Para essa etapa, os passos anteriores precisam estar bem definidos: escopo, ferramentas, problemas e projeto.Além disso, deve ter sido aplicado a avaliação diagnóstica. Dessa maneira, será possível conhecer as necessidades dos alunos, posteriormente será mais fácil produzir os materiais de apoio.</p>
                    <p>Os materiais de apoio consistem em tudo que será usado pelos alunos, durante a atividade. Desde slides sobre o conteúdo até os recursos necessários para a execução da proposta, incluindo: </p>
                    <ul>
                        <li>Folha com o passo-passo</li>
                        <li>Post-it</li>
                        <li>Canetas</li>
                        <li>Manuais</li>
                        <li>Dentre outros</li>
                    </ul>
                </div>
            </div>
            <div style={{marginTop:"2rem"}}>
                <div style={{float:'left',marginRight:'20px'}}>
                    <Button onClick={async () => {
                        onChange(step-1);
                    }}>Anterior</Button>
                </div>

                <div style={{float:'right',marginRight:'20px'}}>
                    <Button onClick={async () => {

                        var escopo = JSON.parse(localStorage.getItem("escopo"));
                        var recurso = JSON.parse(localStorage.getItem("recurso"));
                        var projetoInfo = JSON.parse(localStorage.getItem("projetoInfo"));
                        
                        onSubmit(escopo,recurso,projetoInfo);
                        
                        router.prefetch('/meus-projetos');
                        router.push('/meus-projetos');
                    
                    }}>Concluir</Button>
                </div>
            </div>
        </>
    );

}

export default TelaMaterialApoio;