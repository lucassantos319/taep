import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import Layout from '../components-material-ui/templates/layout';
import TelaCadastrarAluno from '../components-material-ui/templates/telaCadastrarAluno';

const Perfil = ({}) => {

	const [userCookie, setCookie] = useCookies(["user"]);
	const router = useRouter();
	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.data.login;
		if ( userInfoLogin ){

			return (
				<>
					<Layout tipo={userCookie.user.user_type}>		
						<TelaCadastrarAluno usuario={userCookie.user.data.first_name+' '+userCookie.user.data.last_name}/>
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
