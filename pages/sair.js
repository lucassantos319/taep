import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const Sair = ({}) => {

	const [userCookie, setCookie,removeCookies] = useCookies(["user"]);
	const router = useRouter()

	if ( Object.keys(userCookie).length !== 0 ){
		const userInfoLogin= userCookie.user.login;
		if ( userInfoLogin ){
            removeCookies("user");
            router.push("/");
			return (<></>)	
		}
		
	}
    router.push("/");
    return (<></>)	
	
}


export default Sair;
