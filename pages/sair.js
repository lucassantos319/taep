import { useRouter } from 'next/router';
import {useCookies} from 'react-cookie';

const Sair = ({}) => {

    const [userCookie,setCookie,removeCookies] = useCookies(["user"]);
    const router = useRouter();

    removeCookies("user");
    router.push("/");
    return(
        <>
        </>
    );
        
}


export default Sair;
