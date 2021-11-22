import Image from 'next/image';
import imgKahoot from '../../../../public/img/tec/kahoot.png'
import imgQuizizz from '../../../../public/img/tec/quizizz.png'
import imgSocrative from '../../../../public/img/tec/socrative.png'
import imgQuizletLive from '../../../../public/img/tec/quizletLive.png'
import imgQuizAlive from '../../../../public/img/tec/quizAlive.jpg'
import Layout from '../../../../components-material-ui/templates/layout';
import {useCookies} from 'react-cookie';
import { HelpHeader } from '../../../../components-material-ui/templates/ajuda/HelpHeader';

const Gamificacao = () => {

    const [userCookie,setCookie] = useCookies(['user']);

    if ( Object.keys(userCookie).length !== 0 ){
        return (
            <>
                <Layout tipo={userCookie.user.data.user_type}>
                    <div>
                        <HelpHeader title="Gamificação"/>
                    </div>
                    <div style={{marginTop:"40px",marginLeft:"10%"}}>
                        <div style={{display:"flex"}}>
                            <div style={{width:"13%",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://kahoot.com/schools-u/';
                            }}>
                                <Image src={imgKahoot}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Kahoot</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://quizizz.com/';
                            }}>
                                <Image src={imgQuizizz}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Quizizz</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://www.socrative.com/';
                            }}>
                                <Image src={imgSocrative}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Socrative</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://quizlet.com/login';
                            }}>
                                <Image src={imgQuizletLive}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Quizlet Live</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://www.quizalize.com/';
                            }}>
                                <Image src={imgQuizAlive}></Image>
                                <div style={{textAlign:"center"}}> 
                                    <p>Quiz alive</p>
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

export default Gamificacao;