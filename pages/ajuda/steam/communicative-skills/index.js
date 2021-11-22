import {useCookies} from 'react-cookie';
import Layout from '../../../../components-material-ui/templates/layout';
import { HelpHeader } from '../../../../components-material-ui/templates/ajuda/HelpHeader';
import imgCognitiva from "../../../../public/img/ods/communicative.jpg";
import Image from 'next/image';

const Communicative = () => {

    const [userCookie,setCookie] = useCookies(['user']);
	
	if ( Object.keys(userCookie).length !== 0 ){
        return (
            <>
                <Layout tipo={userCookie.user.data.user_type}>
                    <div style={{width:"90%",marginLeft:"5%",marginTop:"8%",paddingBottom:"12%"}}>
                        <div>
                            <HelpHeader title="Habilidades Comunicativas"/>
                        </div>
                        <div style={{display:'flex'}}>
    
                            <div style={{width:"50%"}}>
                                <div style={{marginLeft:"10%",width:"70%"}}>
                                    <Image src={imgCognitiva}></Image>
                                </div>
                            </div>
    
                            <div style={{width:"50%"}}> 
                                <span style={{marginTop:"20px",fontSize:'19px'}}> 
                                Por meio de diversas conexões e troca de informações, no processo de comunicação a mensagem é conduzida e compreendida e possibilita o aprendizado, a resolução de atividades, a motivação, a cooperação, obtendo assim melhores resultado nos ambientes de trabalho.  
                                </span>
                                <span style={{fontSize:'19px',fontWeight:'bold'}}>São elas: negociação e comunicação, dentre outras. Leia mais!</span> 
                                <div style={{padding:'10px',border:'1px solid #e0e0e0',width:'95%',marginTop:"20px"}}>
                                    <a href="https://www.portaleducacao.com.br/conteudo/artigos/administracao/habilidades-comunicativas-gestor-de-relacionamento/33677">www.portaleducacao.com.br/conteudo/artigos/administracao/habilidades-comunicativas-gestor-de-relacionamento/33677</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }


    return (
        <>
            <p>teste</p>
        </>
    );
}

export default Communicative;