import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { HelpHeader } from '../../components-material-ui/templates/ajuda/HelpHeader';
import { HelpPassos } from '../../components-material-ui/templates/ajuda/HelpPassos';
import { HelpPlanejamento } from '../../components-material-ui/templates/ajuda/HelpPlanejamento';
import Layout from '../../components-material-ui/templates/layout';
import {useCookies} from 'react-cookie';
import {useRouter} from 'next/router';

const Help = () => {
   

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [titleValue,setTitle] = useState("");


    const [userCookie,setCookie] = useCookies(['user']);
	const router = useRouter();

	if ( Object.keys(userCookie).length !== 0 ){
            return (
                <>
                    <Layout tipo={userCookie.user.data.user_type}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Passos do TAEP 4.0" value="1" />
                                        <Tab label="Planejamento" value="2" />
                                        <Tab label="Atividades" value="3" />
                                        <Tab label="Avaliações do projeto" value="4" />
                                        <Tab label="Avisos" value="5" />

                                    </TabList>
                                </Box>
                            
                                <TabPanel value="1">
                                    <HelpHeader title="Passos do TAEP 4.0"/>
                                    <HelpPassos/>
                                </TabPanel>
                                <TabPanel value="2">
                                    <HelpHeader title="Planejamento"/>
                                    <HelpPlanejamento />
                                </TabPanel>
                                <TabPanel value="3">

                                </TabPanel>
                                <TabPanel value="4">
                                    
                                </TabPanel>
                                <TabPanel value="5">
                                
                                </TabPanel>

                            </TabContext>
                        </Box>
                    </Layout>
                </>
            );
        }
    
    return (
        <>
        </>
    );
}

export default Help;