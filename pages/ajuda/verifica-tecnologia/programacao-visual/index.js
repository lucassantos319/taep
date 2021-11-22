import Image from 'next/image';
import imgKahoot from '../../../../public/img/tec/blocklyGames.jpg'
import imgHoraCodigo from '../../../../public/img/tec/horaCodigo.png'
import imgQuizizz from '../../../../public/img/tec/codeSpark.jpg'
import imgSocrative from '../../../../public/img/tec/twine.jpg'
import imgQuizletLive from '../../../../public/img/tec/scratch.jpg'
import imgQuizAlive from '../../../../public/img/tec/kodu.png'
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
                                window.location.href='https://blockly.games/';
                            }}>
                                <Image src={imgKahoot}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Blockly Games</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://codespark.com/play/';
                            }}>
                                <Image src={imgHoraCodigo}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Code Spark</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://codespark.com/play/';
                            }}>
                                <Image src={imgQuizizz}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Code Spark</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://twinery.org/';
                            }}>
                                <Image src={imgSocrative}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Twine</p>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"inline-flex",width:"100%",marginTop:"20px"}}> 
                            <div style={{width:"13%", marginLeft:"10%",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://scratch.mit.edu/';
                            }}>
                                <Image src={imgQuizletLive}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Scratch</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://www.kodugamelab.com/';
                            }}>
                                <Image src={imgQuizAlive}></Image>
                                <div style={{textAlign:"center"}}> 
                                    <p>Kodu</p>
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