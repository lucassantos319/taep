import Image from 'next/image';
import imgKahoot from '../../../../public/img/tec/metaverse.png'
import imgHoraCodigo from '../../../../public/img/tec/starChart.png'
import imgQuizizz from '../../../../public/img/tec/quiver.png'
import imgSocrative from '../../../../public/img/tec/anatomy.png'
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
                                window.location.href='https://studio.gometa.io/landing';
                            }}>
                                <Image src={imgKahoot}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Metaverse</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://apps.apple.com/br/app/star-chart-infinite/id714180827';
                            }}>
                                <Image src={imgHoraCodigo}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Star Chart</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}} onClick={()=>{
                                window.location.href='https://play.google.com/store/apps/details?id=com.puteko.colarmix&hl=en';
                            }}>
                                <Image src={imgQuizizz}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Quiver</p>
                                </div>
                            </div>
                            <div style={{width:"13%", marginLeft:"80px",cursor:"pointer"}}  onClick={()=>{
                                window.location.href='https://play.google.com/store/apps/details?id=com.AnatomyLearning.Anatomy3DViewer3&hl=pt_BR';
                            }}>
                                <Image src={imgSocrative}></Image>
                                <div style={{textAlign:"center"}}>
                                    <p>Anatomy Learning</p>
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