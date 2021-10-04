import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Mensagens from "./mensagens";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Button from 'react-bootstrap/Button'
import DescricaoProjeto from '../../components-material-ui/organism/descricaoProjeto'
import UsuariosProjetos from "./usuariosProjeto";

function TabsProjetoProfessor ({atividadeData,usuarios,avaliacoes,projectInfo}){
    
    const [cookieUser, setCookieUser] = useCookies(["user"])
    const router = useRouter();

    return(
        <>

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
                        <DescricaoProjeto projectInfo={projectInfo}/>
                    </DivInterna>
                </TabPanel>

                {/* Alunos */}
                <TabPanel>
                    <DivInterna>
                        <UsuariosProjetos 
                            projectInfo={projectInfo}
                            type={cookieUser.user.user_type}
                            onClick={showModalUsuario}
                            usuarios={usuarios}
                            userId={cookieUser.user.id}
                        />

                    </DivInterna>
                </TabPanel>

                {/*Atividade*/}
                <TabPanel>
                    <DivInterna>
                        {
                            cookieUser.user.user_type != 1 ? 
                                <div></div>:
                                <div >
                                    <Button onClick={showModalAtividade}>Criar Atividades</Button> 
                                </div>
                        }
                       <Mensagens messagesData={atividadeData}></Mensagens>
                    </DivInterna>
                </TabPanel>
                

                {/* Avaliação */}
                <TabPanel>
                    <DivInterna>
                        <Mensagens messagesData={avaliacoes}></Mensagens>
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
