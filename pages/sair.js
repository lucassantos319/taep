import { useRouter } from 'next/router';
import {useCookies} from 'react-cookie';

const Sair = ({}) => {

    const [userCookie,setCookie,removeCookies] = useCookies(["user"]);
    const router = useRouter();

    if ( Object.keys(userCookie).length !== 0 ){
        
        removeCookies("user");
        router.push("/");
        return(
            <>
            </>
        );
    }
    
    return(
        <>
            <p>Problema com o cookie</p>
        </>
    );
        
}


export default Sair;
