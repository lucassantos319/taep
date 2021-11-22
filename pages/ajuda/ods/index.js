import React from 'react'
import {HelpHeader} from '../../../components-material-ui/templates/ajuda/HelpHeader';
import imgODS from '../../../public/img/ods/objetivos-desenvolvimento-sustenavel.png';
import Image from 'next/image';
import Layout from '../../../components-material-ui/templates/layout';
import {useCookies} from 'react-cookie';

const ODS = () => {

    const [userCookie,setCookie] = useCookies(['user']);
	
    if ( Object.keys(userCookie).length !== 0 ){

        return (
            <>
                <Layout tipo={userCookie.user.data.user_type} >
                    <div style={{width:"90%",marginLeft:"5%",marginTop:"8%",paddingBottom:"12%"}}>
                        <div>
                            <HelpHeader title="Objetivos de Desenvolvimento Sustentável"/>
                        </div>
                        <div style={{display:'flex'}}>
    
                            <div style={{width:"60%"}}>
                                <div style={{width:"95%"}}>
                                    <Image src={imgODS}></Image>
                                </div>
                                <div style={{marginTop:'20px',padding:'10px',border:'1px solid #e0e0e0',width:'95%'}}>
                                    <p>Visite esse post para mais</p>
                                    <a href="https://brasil.un.org/pt-br/sdgs">nacoesunidas.org/pos2015/agenda2030/</a>
                                </div>
                            </div>
    
                            <div style={{width:"40%"}}> 
                                <h3>
                                    Como cultivar valores para um boa cidadania?
                                </h3>
                                <span style={{marginTop:"10px",fontSize:'19px'}}> 
                                    Os temas relacionados aos 
                                </span>
                                <span style={{fontSize:'19px',fontWeight:"bold"}}>Objetivos de Desenvolvimento Sustentável (ODS) </span>
                                <span style={{fontSize:'19px'}}>
                                    da Organização das Nações Unidas 
                                    (ONU) foram escolhidos pela necessidade de abordar, a cada dia mais, os problemas que estão afetando a
                                    qualidade de vida do homem. Desse modo, acredita-se que será possível cultivar valores para uma boa 
                                    cidadania, como responsabilidade, cooperação, empatia e engajamento na construção de uma sociedade melhor.
                                </span>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }

    return (<><p>teste</p></>);
}

export default ODS ;