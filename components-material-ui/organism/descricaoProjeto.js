import React,{useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid, Container, TextField, Button, Chip, makeStyles, TextareaAutosize } from '@material-ui/core';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        '& > * + *': {
        marginTop: theme.spacing(3),
        },
    },
}));

const DescricaoProjeto = ({projectInfo}) => {
    
    const classes = useStyles();
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <Tela>
            <div style={{textAlign:'center'}}>
                <h4>Titulo: {projectInfo.titulo}</h4>

                <h6 style={{color:'grey'}}>Criador do projeto: {projectInfo.userCreator.first_name+" "+projectInfo.userCreator.last_name}</h6>
            </div>

            <div style={{marginTop:'40px'}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Escopo" value="1" />
                            <Tab label="Tecnologias selecionadas" value="2" />
                        </TabList>
                    </Box>
                   
                    <TabPanel value="1">
                        
                    </TabPanel>
                  
                </TabContext>
            </div>

        </Tela>
    )
}

export default DescricaoProjeto;



const Tela = styled.div`
    padding: 12px;
`


