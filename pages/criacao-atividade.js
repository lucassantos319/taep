import Head from 'next/head';
import FormBuilder from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import DemoBar from '../components/organism/demobar'; 
import { useCookies } from 'react-cookie';

const CriacaoAtividade = ({}) => {

    const [userCookie, setCookie] = useCookies(["user"]);
    const [atividadeCookie, setAtividadeCookie] = useCookies(["atividade"])
	console.log(atividadeCookie);
    if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.login;
		if ( userInfoLogin ){
            return (
                <>
                    <Head>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                    </Head>  
        
                    <div style={{marginLeft:"15%",marginTop:"2%",width:"70%"}}>
        

                        <DemoBar userIdCreator={userCookie.user.id} postUrl={process.env.SERVER_HOST+"project/"+atividadeCookie.atividade.projectId+"/criarAtividade"} />

                        <FormBuilder.ReactFormBuilder /> 
                    </div>
                    
                  
                </>
            )
        }
	}
    return (
        <>
            <h2>Cookie não encontrado.. será redirecionado para o login</h2>
        </>
        )

}

export default CriacaoAtividade;
