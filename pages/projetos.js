import Head from 'next/head';
import Layout from '../components-material-ui/templates/layout';
import TelaTodosProjetos from '../components-material-ui/templates/telaTodosProjetos';


import axios from 'axios';
import { useRouter } from 'next/router';
import { CookiesProvider,withCookies,useCookies } from 'react-cookie';

export async function getStaticProps() {

	const url = process.env.SERVER_HOST+"project/getAll";
	const projects = await axios.get(url).then(response=>response.data);
	return { props: { projects } }

}


const Projetos = (props) => {
	
	const router = useRouter();
	const [userCookie,setCookie] = useCookies(["user"]);
	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.login;
		if ( userInfoLogin ){
			//          
			return (
				<Layout tipo={userCookie.user.user_type}>
					<TelaTodosProjetos 
						projects={props.projects}
						usuario={userCookie.user.user_type}
					/>
				</Layout>
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

export default withCookies(Projetos);