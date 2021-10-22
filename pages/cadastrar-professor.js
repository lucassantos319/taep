import { useRouter } from 'next/router';
import Head from 'next/head';
import TelaCadastrarProfessor from '../components-material-ui/templates/telaCadastrarProfessor';

const CadastrarProfessor = ({num}) => {
	
	const router = useRouter();
	console.log(num)
	if ( router.query.ready == 1 ){

		router.push({
			pathname:'/',
			query:{ready:1}
		})

		return (<></>);
	}

	return (
		<>
			<Head>
				<title>Cadastre-se na plataforma</title>
			</Head>  
			<main>
				<TelaCadastrarProfessor />
			</main>
		</>
	)
}


export default CadastrarProfessor;
