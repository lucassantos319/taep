import CardUser from "../molecules/cardUsuario";

const UsuariosProjetos = ({projectInfo,usuarios,type,onClick,userId}) => {
    console.log(projectInfo)
    return(
        
        <div>
           { type == 1 && projectInfo.userCreator.id==userId?
                <div>
                <button style={{width:"100%", padding:"14px"}} onClick={onClick}> Incluir participante </button>
                </div>:<div></div>
            } 
            <div>
                {
                    usuarios.map((item) => (
                        <div key={item.id}>
                            <CardUser usuario={item} id={item.id} usuarioCreatorId={projectInfo.userCreator.id} usuarioId={userId}/>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default UsuariosProjetos;

