import CardUser from "../molecules/cardUsuario";

const UsuariosProjetos = ({projectInfo,usuarios,type,onClick,userId}) => {
    
    return(
        
        <div >
           { type == 1 && projectInfo.userCreator.id==userId?
                <div>
                <button style={{width:"100%", padding:"14px"}} onClick={onClick}> Vincular usuario </button>
                </div>:<div></div>
            } 
            <div>
                {
                    usuarios.data.map((item) => (
                        <CardUser usuario={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default UsuariosProjetos;

