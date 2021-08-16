import styled from "styled-components";
import Paragrafo from "../atoms/tipografia/paragrafo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Mensagens from "./mensagens";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";

import UsuariosProjetos from "./usuariosProjeto";
import axios from 'axios';

function TabsProjetoProfessor ({atividadeData,usuarios,avaliacoes}){
    
    const {register,handleSubmit} = useForm();
    const [cookie, setCookie] = useCookies(["atividade"])
    const [cookieUser, setCookieUser] = useCookies(["user"])
    const router = useRouter();
    const {id} = router.query;
    
    const [isOpenAtividade, setIsOpenAtividade] = useState(false);
    const [isOpenUsuario, setIsOpenUsuario] = useState(false);

    const showModalAtividade = () => {
      setIsOpenAtividade(true);
    };

    const showModalUsuario = () => {
        setIsOpenUsuario(true);
      };
      
    const hideModalAtividade = () => {
    setIsOpenAtividade(false);
    };

    const hideModalUsuario = () => {
        setIsOpenUsuario(false);
    };


    const pushAtividade = (data) => {
        
        const atividade = {
            "titulo":data.title,
            "description":data.description
        }

        setCookie("atividade", JSON.stringify(atividade), {
            path: "/",
            sameSite: true
        });

        router.prefetch("/criacao-atividade");
        router.push("/criacao-atividade");
    }


    const pushUsuario = async (data) => {
       

        const url = process.env.SERVER_HOST+"project/"+id+"/linkUsuario";
        
        if ( Object.keys(cookieUser).length !== 0 ){
            if ( cookieUser.user.login ){
                
                const x = await axios.post(url,{"userEmail":data.email,"userRequestId":cookieUser.user.id})
                .then(response => response.data);
                
                console.log(x);
            }
        }

        hideModalUsuario();
    }


    return(
        <>
            <Modal show={isOpenAtividade} onHide={hideModalAtividade}>

            <Modal.Header>
                <Modal.Title>Criar atividade</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div style={{padding:"20px"}}>

                        <div style={{marginBottom:"30px"}}>
                            <TextField {...register("title")} id="title"  style={{ width:"100%"}} required label="Titulo" variant="outlined"/>

                        </div>
                        <div>
                            <TextField {...register("description")} required id="description" style={{ width:"100%"}} label="Descrição" variant="outlined"/>

                        </div>
                    </div>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit(pushAtividade)}>Criar</Button>

                <Button onClick={hideModalAtividade}>Cancel</Button>
            </Modal.Footer>
            </Modal>

            <Modal show={isOpenUsuario} onHide={hideModalUsuario}>
            <Modal.Header>
                <Modal.Title>Vincular usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div style={{padding:"20px"}}>

                        <div>
                            <TextField {...register("email")} placeholder="Insira o email a ser vinculado" style={{ width:"100%"}} required label="Email" variant="outlined"/>
                        </div>
                    </div>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit(pushUsuario)}>Criar</Button>
                <Button onClick={hideModalUsuario}>Cancel</Button>

            </Modal.Footer>
            </Modal>
        
        <Div1>
            <Tabs>
                <TabList>
                    <Tab>Descrição</Tab>
                    <Tab>Alunos</Tab>
                    <Tab>Atividades</Tab>
                    <Tab>Avaliações do Projeto</Tab>
                    <Tab>Avisos</Tab>
                </TabList>

                {/*Descrição*/}
                <TabPanel>
                    <DivInterna>
                        <h2>Any content 1</h2>
                    </DivInterna>
                </TabPanel>

                {/* Alunos */}
                <TabPanel>
                    <DivInterna>
                        <UsuariosProjetos onClick={showModalUsuario} usuarios={usuarios}/>

                    </DivInterna>
                </TabPanel>

                {/*Atividade*/}
                <TabPanel>
                    <DivInterna>
                        <div >

                            <Button onClick={showModalAtividade}>Criar Atividades</Button> 

                        </div>
                       <Mensagens messagesData={atividadeData}></Mensagens>
                    </DivInterna>
                </TabPanel>
                

                {/* Avaliação */}
                <TabPanel>
                    <DivInterna>
                        <h2>Any content 4</h2>
                    </DivInterna>
                </TabPanel>

                {/* Avisos */}
                <TabPanel>
                    <DivInterna>
                        <h2>Any content 5</h2>
                    </DivInterna>
                </TabPanel>
            </Tabs>
        </Div1>
        </>
    )
}


export default TabsProjetoProfessor

const Div1 = styled.div`
padding: 36px;
height: 100%;
width: 80%;

ul{
    margin: 0px;
    li{
        font-weight: 600;
    }
}
`
const DivInterna = styled.div`
padding: 12px;
border-top-color: transparent;
border-top-style: solid;
border-top-width: 1px;
border-right-color: rgb(170, 170, 170);
border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgb(170, 170, 170);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(170, 170, 170);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    `
