import Head from 'next/head';
import Layout from '../components-material-ui/templates/layout';
import {useCookies} from 'react-cookie';

import TelaCriarProjeto from '../components-material-ui/templates/telaCriarProjeto';
import { useRouter } from 'next/router';

const CriarProjeto = ({}) => {

	const [userCookie,setCookie] = useCookies(['user']);
	const router = useRouter();

	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.data.login;
		if ( userInfoLogin ){
			//          
			return (
				<>
					<Head>
						<title>Criação do projeto</title>
					</Head>
					<Layout tipo={userCookie.user.data.user_type}>
						<TelaCriarProjeto/>
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


export default CriarProjeto;
