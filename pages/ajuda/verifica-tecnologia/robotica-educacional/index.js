import Image from 'next/image';
import imgKahoot from '../../../../public/img/tec/robo_de_sucata1.jpg'
import imgHoraCodigo from '../../../../public/img/tec/robo_de_sucata2.jpg'
import imgQuizizz from '../../../../public/img/tec/escova_robo.jpg'
import imgSocrative from '../../../../public/img/tec/marialina.png'
import imgQuizletLive from '../../../../public/img/tec/olimpiadas.jpg'
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
                                window.location.href='https://www.fazfacil.com.br/artesanato/como-fazer-um-robo-de-sucata/';
                            }}>
                                <Image src={imgKahoot}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Robô de Sucata 1</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://codespark.com/play/';
                            }}>
                                <Image src={imgHoraCodigo}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Robô de Sucata 2</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://programae.org.br/planos_aula/robo-escova-e-o-tabuleiro-quiz/';
                            }}>
                                <Image src={imgQuizizz}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Escova-Robô</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://sites.google.com/view/marialina/e-m%C3%A9dio/experimentos';
                            }}>
                                <Image src={imgSocrative}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Marialina</p>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"inline-flex",width:"100%",marginTop:"40px"}}> 
                            <div style={{width:"13%", marginLeft:"10%",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='http://www.obr.org.br/';
                            }}>
                                <Image src={imgQuizletLive}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Olimpíada de Robótica</p>
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