import {useCookies} from 'react-cookie';
import Layout from '../../../components-material-ui/templates/layout';
import { HelpHeader } from '../../../components-material-ui/templates/ajuda/HelpHeader';
import imgSteam from "../../../public/img/ods/imgSteam.jpg";
import Image from 'next/image';

const Steam = () => {

    const [userCookie,setCookie] = useCookies(['user']);
	
	if ( Object.keys(userCookie).length !== 0 ){
        return (
            <>
                <Layout tipo={userCookie.user.data.user_type}>
                    <div style={{width:"90%",marginLeft:"5%",marginTop:"8%",paddingBottom:"12%"}}>
                        <div>
                            <HelpHeader title="Steam"/>
                        </div>
                        <div style={{display:'flex'}}>
    
                            <div style={{width:"60%"}}>
                                <div style={{width:"95%"}}>
                                    <Image src={imgSteam}></Image>
                                </div>
                                <div style={{padding:'10px',border:'1px solid #e0e0e0',width:'95%'}}>
                                    <p>Neste post você fica sabendo o significado do termo STEAM e entende a importância desta nova metodologia para os seus alunos.</p>
                                    <a href="https://tecnologia.educacional.com.br/blog-inovacao-e-tendencias/steam-metodologia-que-precisa-conhecer/">www.positivoteceduc.com.br/blog-inovacao-e-tendencias/steam-metodologia-que-precisa-conhecer/</a>
                                </div>
                            </div>
    
                            <div style={{width:"40%"}}> 
                                <h4>
                                    Como trabalhar a multidisciplinaridade na minha turma?
                                </h4>
                                <span style={{marginTop:"20px",fontSize:'19px'}}> 
                                    A STEAM é um metodologia que permite um trabalho multidisciplinar em sala de aula, por meio de áreas, como: 
                                </span>
                                <span style={{fontSize:'19px',fontWeight:'bold'}}> Ciências, Tecnologia, Engenharia, Artes e Matemática.</span> 
                                <span style={{fontSize:'19px'}}> Assim, acredita-se que será possível trabalhar conteúdos didáticos, além de desenvolver as competências e habilidades do Século XXI, como criatividade, colaboração, autonomia, comunicação, dentre outras.</span>
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

export default Steam;