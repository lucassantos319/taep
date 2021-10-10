import Layout from '../../components-material-ui/templates/layout';
import TelaMeusProjetos from '../../components-material-ui/templates/telaMeusProjetos';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import * as cookie from 'cookie';

export async function getServerSideProps(context) {

    try{
	
        const parsedCookies = cookie.parse(context.req.headers.cookie);
		const user = JSON.parse(parsedCookies.user);
    	const url = "https://taep-backend.herokuapp.com/project/"+user.data.id;
		const projects = await axios.get(url).then(response=>response.data);
		return { props: { projects } }

	}
	catch(error){
		const projects = []
		return {props:{ projects }}
	}
	
}

const MeusProjetos = (props) => {
	
	const router = useRouter();
    const [userCookie,setCookie] = useCookies(["user"]);
	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.data.login;
		if ( userInfoLogin ){
			return (
                <Layout tipo={userCookie.user.data.user_type}>
                    <TelaMeusProjetos 
                        projects={props.projects}
                        usuario={userCookie.user.data}
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


export default MeusProjetos;

