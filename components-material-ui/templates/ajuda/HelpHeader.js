
const HelpHeader = ({title}) => {
    return (
        <> 
            <div style={{backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:'url("/img/helpBackGround.jpg")'}}>
                <div style={{width:'100%',display:"flex",justifyContent:"center",alignItems:"center",height:"200px", }}>
                    <h2 style={{color:"white"}}>{title}</h2>
                </div>
            </div>
        </>
    );
}

export {HelpHeader}