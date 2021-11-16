
const HelpHeader = ({title}) => {
    return (
        <> 
            <div >
                <div style={{width:'100%',display:"flex",justifyContent:"center",alignItems:"center",height:"200px",backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:"url(https://lh3.googleusercontent.com/0GalXUQ7XfYwMPo-yyNaPDlYkduMF06kYfBjbEx7QB-E7g9p_Wy6CK21nHRyrfccCjoZnQ=w16383)"}}>
                    <h2 style={{color:"white"}}>{title}</h2>
                </div>
            </div>
        </>
    );
}

export {HelpHeader}