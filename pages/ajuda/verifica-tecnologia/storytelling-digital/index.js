import Image from 'next/image';
import imgKahoot from '../../../../public/img/tec/bookCreator.png'
import imgHoraCodigo from '../../../../public/img/tec/storyboard.png'
import imgQuizizz from '../../../../public/img/tec/zimmer.jpg'
import imgSocrative from '../../../../public/img/tec/comicLife.png'
import imgQuizletLive from '../../../../public/img/tec/storyJumper.png'
import Layout from '../../../../components-material-ui/templates/layout';
import {useCookies} from 'react-cookie';
import { HelpHeader } from '../../../../components-material-ui/templates/ajuda/HelpHeader';

const ProgramacaoBloco = () => {

    const [userCookie,setCookie] = useCookies(['user']);

    if ( Object.keys(userCookie).length !== 0 )
    {
        return (
            <>
                <Layout tipo={userCookie.user.data.user_type}>
                    <div>
                        <HelpHeader title="Programação em blocos"/>
                    </div>
                    <div >
                        <div style={{marginLeft:"10%",display:"inline-flex",width:"100%"}}> 
                            <div style={{width:"13%",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://bookcreator.com/';
                            }}>
                                <Image src={imgKahoot}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Book Creator</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://codespark.com/play/';
                            }}>
                                <Image src={imgHoraCodigo}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Storyboard Creator</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://programae.org.br/planos_aula/robo-escova-e-o-tabuleiro-quiz/';
                            }}>
                                <Image src={imgQuizizz}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Zimmer Twins</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://sites.google.com/view/marialina/e-m%C3%A9dio/experimentos';
                            }}>
                                <Image src={imgSocrative}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Comic Life - HQ</p>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"inline-flex",width:"100%",marginTop:"40px"}}> 
                            <div style={{width:"13%", marginLeft:"10%",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='http://www.obr.org.br/';
                            }}>
                                <Image src={imgQuizletLive}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Storyjumper</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );  

    }

    return (<><p>teste</p></>);
}

export default ProgramacaoBloco;