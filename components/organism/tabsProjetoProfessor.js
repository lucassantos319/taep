import styled from "styled-components";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Mensagens from "./mensagens";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useState   } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import DescricaoProjeto from '../../components-material-ui/organism/descricaoProjeto'
import UsuariosProjetos from "./usuariosProjeto";
import axios from 'axios';
import MensagensAviso from "./messageAviso";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function TabsProjetoProfessor ({atividadeData,usuarios,avaliacoes,projectInfo,avisos}){
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {register,handleSubmit} = useForm();
    const [cookie, setCookie] = useCookies(["atividade"])
    const [cookieUser, setCookieUser] = useCookies(["user"])
    const router = useRouter();
    const {id} = router.query;
    
    const [isOpenAtividade, setIsOpenAtividade] = useState(false);
    const [isOpenUsuario, setIsOpenUsuario] = useState(false);
    const [isOpenAvaliacao, setIsOpenAvaliacao] = useState(false);
    const [isOpenAviso, setIsOpenAviso] = useState(false);


    const showModalAtividade = () => {
      setIsOpenAtividade(true);
    };


    const showModalAvaliacao = () => {
        setIsOpenAvaliacao(true);
      };

    const showModalAviso = () => {
        setIsOpenAviso(true);
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

    const hideModalAvaliacao = () => {
        setIsOpenAvaliacao(false);
      };

    const hideModalAviso = () => {
        setIsOpenAviso(false);
    };

    const pushAtividade = (data) => {
        
        const atividade = {
            "titulo":data.title,
            "description":data.description,
            "projectId":projectInfo.id
        }

        setCookie("atividade", JSON.stringify(atividade), {
            path: "/",
            sameSite: true
        });

        router.prefetch("/criacao-atividade");
        router.push("/criacao-atividade");
    }


    const pushUsuario = async (data) => {
       
        const url = "https://taep-backend.herokuapp.com/project/"+id+"/linkUsuario";
        
        if ( Object.keys(cookieUser).length !== 0 ){
            if ( cookieUser.user.data.login ){
                
                const x = await axios.post(url,{"userEmail":data.email,"userRequestId":cookieUser.user.data.id})
                .then(response => response.data);
                
                alert(x);
            }
        }

        hideModalUsuario();
    }


    const pushAvaliacao = async (data) => {
       

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

    const [value, setValue] = useState('1');
    const pushAviso = async (data) => {
       

        const url = process.env.SERVER_HOST+"project/"+id+"/CreateNotice";
        
        try{

            if ( Object.keys(cookieUser).length !== 0 ){
                if ( cookieUser.user.data.login ){
                    
                    const x = await axios.post(url,{"title":data.titulo,"description":data.descricao,"userId":cookieUser.user.id})
                    .then(response => response.data);
                    
                
                }
            }
        }
        catch(error){
            alert(error.message)
        }
        hideModalAviso();

    }

    return(
        <>
            <Modal style={{marginTop:"7%"}} show={isOpenAtividade} onHide={hideModalAtividade}>

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

            <Modal style={{marginTop:"7%"}} show={isOpenUsuario} onHide={hideModalUsuario}>
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

            <Modal style={{marginTop:"7%"}} show={isOpenAviso} onHide={hideModalAviso}>
            <Modal.Header>
                <Modal.Title>Criar aviso</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div style={{padding:"20px"}}>

                        <div style={{marginBottom:"30px"}}>
                            <TextField {...register("title")} id="title"  style={{ width:"100%"}} required label="Titulo" variant="outlined"/>

                        </div>
                        <div>
                        <TextField 
                                label="Descrição"
                                fullWidth
                                type="text"
                                multiline
                                maxRows={6}
                                variant="outlined"
                                {...register("description")}
                            />
                        </div>
                    </div>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit(pushAviso)}>Criar</Button>

                <Button onClick={hideModalAviso}>Cancel</Button>
            </Modal.Footer>
            </Modal>

        
        <Div1>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Descrição" value="1" />
                            <Tab label="Alunos" value="2" />
                            <Tab label="Atividades" value="3" />
                            <Tab label="Avaliações do projeto" value="4" />
                            <Tab label="Avisos" value="5" />

                        </TabList>
                    </Box>
                   
                    <TabPanel value="1">
                        <DescricaoProjeto projectInfo={projectInfo}/>
                    </TabPanel>
                    <TabPanel value="2">
                        <UsuariosProjetos 
                            projectInfo={projectInfo}
                            type={cookieUser.user.data.user_type}
                            onClick={showModalUsuario}
                            usuarios={usuarios}
                            userId={cookieUser.user.data.id}
                        />
                    </TabPanel>
                    <TabPanel value="3">
                        {
                            cookieUser.user.data.user_type == 1 && cookieUser.user.data.id == projectInfo.userCreator.id ? 
                                <div style={{marginTop:"14px",marginBottom:"25px"}} >
                                    <Button onClick={showModalAtividade}>Criar Atividades</Button> 
                                </div>:
                                <div></div>
                        }
                        
                       <Mensagens messagesData={atividadeData}></Mensagens>
                    </TabPanel>
                    <TabPanel value="4">
                        {
                            cookieUser.user.data.user_type == 1 && cookieUser.user.data.id == projectInfo.userCreator.id ?
                                <div style={{marginTop:"14px",marginBottom:"25px"}}>
                                    <Button onClick={showModalAvaliacao}>Criar Atividades</Button> 
                                </div>:
                                <div></div>
                        }
                        <Mensagens messagesData={avaliacoes}></Mensagens>
                    </TabPanel>
                    <TabPanel value="5">
                        {
                            cookieUser.user.data.user_type == 1 && cookieUser.user.data.id == projectInfo.userCreator.id ?
                                <div style={{marginTop:"14px",marginBottom:"25px"}}>
                                    <Button onClick={showModalAviso}>Criar aviso</Button> 
                                </div>:
                                <div></div>
                        }
                        <MensagensAviso messagesData={avisos}></MensagensAviso>  
                    </TabPanel>

                </TabContext>
            </Box>
            {/* <Tabs>
                <TabList>
                    <Tab>Descrição</Tab>
                    <Tab>Alunos</Tab>
                    <Tab>Atividades</Tab>
                    <Tab>Avaliações do Projeto</Tab>
                    <Tab>Avisos</Tab>
                </TabList>

                <TabPanel>
                    <DivInterna>
                        <DescricaoProjeto projectInfo={projectInfo}/>
                    </DivInterna>
                </TabPanel>

                <TabPanel>
                    <DivInterna>
                        <UsuariosProjetos 
                            projectInfo={projectInfo}
                            type={cookieUser.user.data.user_type}
                            onClick={showModalUsuario}
                            usuarios={usuarios}
                            userId={cookieUser.user.data.id}
                        />

                    </DivInterna>
                </TabPanel>

                <TabPanel>
                    <DivInterna>
                        {
                            cookieUser.user.data.user_type == 1 && cookieUser.user.data.id == projectInfo.userCreator.id ? 
                                <div style={{marginTop:"14px",marginBottom:"25px"}} >
                                    <Button onClick={showModalAtividade}>Criar Atividades</Button> 
                                </div>:
                                <div></div>
                        }
                       <Mensagens messagesData={atividadeData}></Mensagens>
                    </DivInterna>
                </TabPanel>
                
                <TabPanel>
                    <DivInterna>
                        {
                            cookieUser.user.data.user_type == 1 && cookieUser.user.data.id == projectInfo.userCreator.id ?
                                <div style={{marginTop:"14px",marginBottom:"25px"}}>
                                    <Button onClick={showModalAvaliacao}>Criar Atividades</Button> 
                                </div>:
                                <div></div>
                        }
                        <Mensagens messagesData={avaliacoes}></Mensagens>
                    </DivInterna>
                </TabPanel>

                <TabPanel>
                    <DivInterna>
                        {
                            cookieUser.user.data.user_type == 1 && cookieUser.user.data.id == projectInfo.userCreator.id ?
                                <div style={{marginTop:"14px",marginBottom:"25px"}}>
                                    <Button onClick={showModalAviso}>Criar aviso</Button> 
                                </div>:
                                <div></div>
                        }
                        <MensagensAviso messagesData={avisos}></MensagensAviso>                      
                    </DivInterna>
                </TabPanel>
            </Tabs> */}
        </Div1>
        </>
    )
}


export default TabsProjetoProfessor

const Div1 = styled.div`
padding: 36px;
height: 100%;
width: 100%;

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
