import Layout from "../../../../components-material-ui/templates/layout"
import {useCookies} from 'react-cookie';
import { HelpHeader } from '../../../../components-material-ui/templates/ajuda/HelpHeader';
import imgSteam from "../../../../public/img/ods/imgSteam.jpg";

const Socioemotional = () => {

    const [userCookie,setCookie] = useCookies(['user']);
	
	if ( Object.keys(userCookie).length !== 0 ){
        return (
            <>
                <Layout tipo={userCookie.user.data.user_type}>
                    <div style={{width:"90%",marginLeft:"5%",marginTop:"8%",paddingBottom:"12%"}}>
                        <div>
                            {/* <HelpHeader title="STEAM"/> */}
                        </div>
                        <div style={{display:'flex'}}>
    
                            <div style={{width:"60%"}}>
                                <div style={{width:"95%"}}>
                                    {/* <Image src={imgSteam}></Image> */}
                                </div>
                            </div>
    
                            <div style={{width:"40%"}}> 
                                <span style={{fontSize:'19px'}}>Essas competências são utilizadas cotidianamente nas diversas situações da vida e integram o processo de cada um para aprender a conhecer, conviver, trabalhar e ser. São elas:</span>
                                <span style={{fontSize:'19px',fontWeight:'bold'}}> Essas competências são utilizadas cotidianamente nas diversas situações da vida e integram o processo de cada um para aprender a conhecer, conviver, trabalhar e ser. São elas: empatia, felicidade, autoestima, ética, paciência, autoconhecimento, confiança, responsabilidade, autonomia, colaboração, dentre outras. Leia mais!</span> 
                                <div style={{padding:'10px',border:'1px solid #e0e0e0',width:'95%',marginTop:'20px'}}>
                                    <a href="https://diarioescola.com.br/competencias-socioemocionais/">diarioescola.com.br/competencias-socioemocionais/</a>
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

        </>
    );
}

export default Socioemotional;