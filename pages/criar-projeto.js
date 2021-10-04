import Head from 'next/head';
import Layout from '../components-material-ui/templates/layout';
import {useCookies} from 'react-cookie';

import TelaCriarProjeto from '../components-material-ui/templates/telaCriarProjeto';

const CriarProjeto = ({}) => {

	const [userCookie,setCookie] = useCookies(['user']);
	
	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.data.login;
		if ( userInfoLogin ){
			//          
			return (
				<>
					{/* <Head>

					</Head> */}
					<Layout tipo={userCookie.user.user_type}>
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
