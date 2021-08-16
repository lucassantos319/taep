import Layout from '../components/templates/layout';
import Head from 'next/head';

import Navbar from '../components/organism/navbar';

const Configuracoes = ({}) => {

    return (
		<>
			{/* <Head>
			</Head>   */}
			<Layout>
				<Navbar
					id="configuracoes"
					tipo={1}
				>
				</Navbar>
				
				<h1>CONFIGURACOES</h1>
			</Layout>
		</>
	)
}


export default Configuracoes;