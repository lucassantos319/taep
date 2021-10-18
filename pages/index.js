import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {useCookies}from 'react-cookie';
import Head from 'next/head';

import TelaLogin from '../components-material-ui/templates/telaLogin';

const Login = ({num}) => {

    const [userCookie,setCookie] = useCookies(["user"]);
    const router = useRouter();
    
    if ( Object.keys(userCookie).length !== 0 ){
        router.push("/home");
        return(
            <>
            </>
        );
    }
    
    else
    {
        if ( router.query.num != null )
        {
            return (
                <>
                    <Head>
                        <title>Bem vindo ao TAEP 4.0</title>
                    </Head>  
                    <main>
                        <TelaLogin />
                    </main>
                </>
            )
        }
        else{
            useEffect(()=>{
                router.push({
                    pathname: "cadastrar-professor",
                    query: {num: 1}
                });
            }); 

            return (
                <>
                </>
            );
        }
    }
}


export default Login;
