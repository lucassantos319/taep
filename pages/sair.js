import { useRouter } from 'next/router';
import {useCookies} from 'react-cookie';

const Sair = ({}) => {

    const [userCookie,setCookie,removeCookies] = useCookies(["user"]);
    const router = useRouter();
    console.log(userCookie);
    if ( Object.keys(userCookie).length !== 0 ){
        
        removeCookies("user");
        router.push("/");
        return(
            <>
            </>
        );
    }
        
    else
        return (
            <>
                <p>Problema na hora de excluir cookie</p>
            </>
    	)
}


export default Sair;
