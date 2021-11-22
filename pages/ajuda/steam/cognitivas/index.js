import {useCookies} from 'react-cookie';
import Layout from '../../../../components-material-ui/templates/layout';
import { HelpHeader } from '../../../../components-material-ui/templates/ajuda/HelpHeader';
import imgCognitiva from "../../../../public/img/ods/cognitiva.jpg";
import Image from 'next/image';

const Cognitivas = () => {

    const [userCookie,setCookie] = useCookies(['user']);
	
	if ( Object.keys(userCookie).length !== 0 ){
        return (
            <>
                <Layout tipo={userCookie.user.data.user_type}>
                    <div style={{width:"90%",marginLeft:"5%",marginTop:"8%",paddingBottom:"12%"}}>
                        <div>
                            <HelpHeader title="Habilidades Cognitivas "/>
                        </div>
                        <div style={{display:'flex'}}>
    
                            <div style={{width:"50%"}}>
                                <div style={{marginLeft:"15%",width:"65%"}}>
                                    <Image src={imgCognitiva}></Image>
                                </div>
                            </div>
    
                            <div style={{width:"50%"}}> 
                                <span style={{marginTop:"20px",fontSize:'19px'}}> 
                                    As habilidades cognitivas não se trata de memorização, mas sim de informações que são devidamente entendidas, assimiladas e compreendidas. 
                                </span>
                                <span style={{fontSize:'19px',fontWeight:'bold'}}>São elas: solução de problemas, pensamento crítico, agilidade para tomar decisões, interpretação, reflexão, generalização, pensamento abstrato e empreendedorismo. Leia mais!</span> 
                                <div style={{padding:'10px',border:'1px solid #e0e0e0',width:'95%',marginTop:"20px"}}>
                                    <p>Sabe o que são habilidades cognitivas? E suas competências? Se a resposta for não, está na hora de mudar isso.</p>
                                    <a href="https://blog.keeplearning.school/conteudos/o-que-sao-habilidades-cognitivas">blog.keeplearning.school/conteudos/o-que-sao-habilidades-cognitivas</a>
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

export default Cognitivas;