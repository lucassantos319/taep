import Head from 'next/head';
import FormBuilder from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import DemoBarAvaliacao from '../components/organism/demobarAvaliacao'; 
import { useCookies } from 'react-cookie';
import {useRouter} from 'next/router';

const CriacaoAvaliacao= ({}) => {

    const [userCookie, setCookie] = useCookies(["user"]);
    const [avaliacaoCookie, setAvaliacaoCookie] = useCookies(["avaliacao"])
    const router = useRouter();
    
    if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.data.login;
		if ( userInfoLogin ){
            return (
                <>
                    <Head>
                        <title>Criação de atividade</title>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
                    </Head>  
        
                    <div style={{marginLeft:"15%",marginTop:"2%",width:"70%"}}>
                        <DemoBarAvaliacao userIdCreator={userCookie.user.data.id} postUrl={"https://taep-backend.herokuapp.com/project/"+avaliacaoCookie.avaliacao.projectId+"/criarAvaliacao"} />
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

export default CriacaoAvaliacao;
