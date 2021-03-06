import Layout from '../../../components-material-ui/templates/layout';
import Head from 'next/head';
import TabsProjetoProfessor from '../../../components/organism/tabsProjetoProfessor';
import TabsProjetoAluno from '../../../components/organism/tabsProjetoAluno';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';

export async function getServerSideProps(context) {
    

    const {id} = context.query;
    const atividadesUrl = "https://taep-backend.herokuapp.com/project/"+id+"/atividades";
    const usuariosUrl = "https://taep-backend.herokuapp.com/project/"+id+"/usuarios"
    const infoUrl = "http://taep-backend.herokuapp.com/project/"+id+"/info";
    const avisoUrl = "https://taep-backend.herokuapp.com/project/"+id+"/avisos";
    const avaliacaoUrl = "https://taep-backend.herokuapp.com/project/"+id+"/avaliacoes";

    const messagesData = await axios.get(atividadesUrl).then(response=>response.data);
    const avaliacao = await axios.get(avaliacaoUrl).then(response=>response.data);
    const usuarios = await axios.get(usuariosUrl).then(response=>response.data);
    const projectInfo = await axios.get(infoUrl).then(response=>response.data);
    const avisos = await axios.get(avisoUrl).then(response=>response.data)

    console.log(usuarios);
    return { 
        props: { 
            messagesData ,
            usuarios,
            projectInfo,
            avisos,
            avaliacao
        }
     }
}

const ProjetoPageDefault = ({messagesData,usuarios,projectInfo,avisos,avaliacao}) => {

    const router = useRouter();
    const [userCookie,setCookie] = useCookies(['user']);
    const {id} = router.query;
    console.log(messagesData);
    
 
    if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.data.login;
		if ( userInfoLogin ){
       
			return (
                <>
                    <Head>
                        <title>{projectInfo.projects.titulo}</title>
                    </Head>
                    <Layout tipo={userCookie.user.data.user_type}>
                        {userCookie.user.data.user_type==1?
                            <TabsProjetoProfessor avaliacoes={avaliacao} avisos={avisos} atividadeData={messagesData} usuarios={usuarios} projectInfo={projectInfo} idProjeto={id}/>
                            :<TabsProjetoAluno idProjeto={id} avisos={avisos} atividadeData={messagesData} usuarios={usuarios} projectInfo={projectInfo}/>
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


export default ProjetoPageDefault;