import { useRouter } from 'next/router';
import {useCookies}from 'react-cookie';

import TelaLogin from '../components-material-ui/templates/telaLogin';

const Login = ({}) => {

    const [userCookie,setCookie] = useCookies(["user"]);
    const router = useRouter();
    
    if ( Object.keys(userCookie).length !== 0 ){
        router.prefetch("/home");
        router.push("/home");
        return(
            <>
                {/* TODO: COLOCAR MENSAGEM DE LOADING  */}
            </>
        );
    }
        
    else
        return (
            <>
                {/* <Head>
                </Head>   */}
                <main>
                    <TelaLogin />
                </main>
            </>
    	)
}


export default Login;
