import Layout from '../../../components-material-ui/templates/layout';
import Head from 'next/head';
import TabsProjetoProfessor from '../../../components/organism/tabsProjetoProfessor';
import TabsProjetoAluno from '../../../components/organism/tabsProjetoAluno';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';



const ProjetoPageDefault = ({messagesData,usuarios}) => {

    const router = useRouter();
    const [userCookie,setCookie] = useCookies(['user']);
    const {id} = router.query;
    console.log(messagesData);
    
 
    if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.login;
		if ( userInfoLogin ){
       
			return (
                <>
                    <Layout>
        
                        {userCookie.user.user_type==1?

                            <TabsProjetoProfessor atividadeData={messagesData} usuarios={usuarios} idProjeto={id}/>
                            :<TabsProjetoAluno idProjeto={id}/>
                        }
                    
                    </Layout>
                </>
			)	
		}
		else
			return (
				<h1> problema com o login</h1>
			)	
	}
	
	return (
		<>
			<h1>problema com o cookie</h1>
		</>
	)

   
}

export async function getServerSideProps(context) {
    
    // const parsedCookies = cookie.parse(context.req.headers.cookie);
	// // console.log(parsedCookies);
	// const user = JSON.parse(parsedCookies.user);

    const {id} = context.query;
    const atividadesUrl = process.env.SERVER_HOST+"project/"+id+"/atividades";
    const usuariosUrl = process.env.SERVER_HOST+"project/"+id+"/usuarios"
    const messagesData = await axios.get(atividadesUrl).then(response=>response.data);
    const usuarios = await axios.get(usuariosUrl).then(response=>response.data);

    return { 
        props: { 
            messagesData ,
            usuarios

        }
     }
}

export default ProjetoPageDefault;