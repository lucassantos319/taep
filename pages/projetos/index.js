import TelaTodosProjetos from '../../components-material-ui/templates/telaTodosProjetos';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Layout from '../../components-material-ui/templates/layout';
import Head from 'next/head';

export async function getServerSideProps() {

	const url = "https://taep-backend.herokuapp.com/project/getAll";
	const projects = await axios.get(url).then(response=>response.data);
	return { props: { projects } }

}


const Projetos = (props) => {
	
	const router = useRouter();
	const [userCookie,setCookie] = useCookies(["user"]);
	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.data.login;
		if ( userInfoLogin ){
			//          
			return (
				<>
					<Head>
						<title>Todos os projetos</title>
					</Head>
					<Layout tipo={userCookie.user.user_type}>
						<TelaTodosProjetos 
							projects={props.projects}
							usuario={userCookie.user.data}
						/>
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

export default Projetos;