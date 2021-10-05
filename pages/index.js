

export async function getServerSideProps(context){
    return {
        redirect:{
            destination:"/login",
            permanent:true,
        }
    }
}

const Index = ({}) => {
    return (<></>);
}


export default Index;
