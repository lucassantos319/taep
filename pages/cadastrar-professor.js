import { useRouter } from 'next/router';
import {useCookies}from 'react-cookie';

import TelaCadastrarProfessor from '../components-material-ui/templates/telaCadastrarProfessor';

const CadastrarProfessor = ({}) => {
	return (
		<>
			{/* <Head>
			</Head>   */}
			<main>
				<TelaCadastrarProfessor />
			</main>
		</>
	)
}


export default CadastrarProfessor;
