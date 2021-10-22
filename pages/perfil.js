import Head from 'next/head';
import router, { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import Layout from '../components-material-ui/templates/layout';
import TelaPerfil from '../components-material-ui/templates/telaPerfil';

const Perfil = ({}) => {

	const [userCookie, setCookie] = useCookies(["user"]);

	if ( Object.keys(userCookie).length !== 0 ){

		const userInfoLogin= userCookie.user.data.login;
		if ( userInfoLogin ){
			console.log(userCookie.user.data);
			return (
				<>

					<Layout tipo={userCookie.user.data.user_type}>		
						<TelaPerfil userCookie={userCookie}/>
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


export default Perfil;
