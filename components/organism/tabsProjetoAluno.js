import styled from "styled-components";
import {useState} from 'react';
import 'react-tabs/style/react-tabs.css';
import Mensagens from "./mensagens";
import { useCookies } from "react-cookie";
import MensagensAviso from "./messageAviso";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DescricaoProjeto from '../../components-material-ui/organism/descricaoProjeto'
import UsuariosProjetos from "./usuariosProjeto";

function TabsProjetoProfessor ({atividadeData,usuarios,avaliacoes,projectInfo,avisos}){
    
    const [cookieUser, setCookieUser] = useCookies(["user"])
    
    console.log(cookieUser);
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <>

            <Div1>
                <Box>
                    <TabContext value={value}>
                        <Box>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab value="1" label="Usuários do projeto"/>
                                <Tab value="2" label="Atividades"/>
                                <Tab value="3" label="Avaliações"/>
                                <Tab value="4" label="Avisos"/>
                            </TabList>
                            
                        </Box>

                        <TabPanel value="1">
                            <UsuariosProjetos 
                                projectInfo={projectInfo.projects}
                                type={cookieUser.user.data.user_type}
                                usuarios={usuarios}
                                userId={cookieUser.user.data.id}
                            />
                        </TabPanel>

                        <TabPanel value="2">
                            <Mensagens messagesData={atividadeData}></Mensagens>
                        </TabPanel>

                        <TabPanel value="3">
                            <Mensagens messagesData={avaliacoes}></Mensagens>
                        </TabPanel>

                        <TabPanel value="4">
                            <MensagensAviso messagesData={avisos}></MensagensAviso> 
                        </TabPanel>

                    </TabContext>
                </Box>
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
