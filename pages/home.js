import Head from 'next/head';
import Layout from '../components-material-ui/templates/layout';
import {useCookies} from 'react-cookie';

import TelaHome from '../components-material-ui/templates/telaHome';


const Home = ({}) => {

	const [userCookie,setCookie] = useCookies(['user']);
	
	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin = userCookie.user.data.login;
		if ( userInfoLogin ){
			//          
			return (
				<>
					<Layout tipo={userCookie.user.data.user_type}>
						<TelaHome/>
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


export default Home;
