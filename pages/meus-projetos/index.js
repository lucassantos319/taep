
import Head from 'next/head';
import Layout from '../../components-material-ui/templates/layout';
import TelaMeusProjetos from '../../components-material-ui/templates/telaMeusProjetos';

import axios from 'axios';
import { useRouter } from 'next/router';
import { CookiesProvider,withCookies,useCookies } from 'react-cookie';
import * as cookie from 'cookie';

// export async function getStaticProps() {

// 	const url = process.env.SERVER_HOST+"project/1";
// 	const projects = await axios.get(url).then(response=>response.data);
// 	return { props: { projects } }

// }



const MeusProjetos = (props) => {
	
	const router = useRouter();
	const [userCookie,setCookie] = useCookies(["user"]);
	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.login;
		if ( userInfoLogin ){
			//          

			return (
 
					<Layout tipo={userCookie.user.user_type}>
						<TelaMeusProjetos 
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


export async function getServerSideProps(context) {

	try{
		const parsedCookies = cookie.parse(context.req.headers.cookie);
		// console.log(parsedCookies);
		const user = JSON.parse(parsedCookies.user);
		const url = process.env.SERVER_HOST+"project/"+user.id;
		const projects = await axios.get(url).then(response=>response.data);
		console.log(projects);
		return { props: { projects } }

	}
	catch(error){
		const projects = []
		return {props:{ projects }}
	}
	
}

export default MeusProjetos;

