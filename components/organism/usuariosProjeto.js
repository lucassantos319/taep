import CardUser from "../molecules/cardUsuario";

const UsuariosProjetos = ({projectInfo,usuarios,type,onClick,userId}) => {
    console.log(usuarios)
    return(
        
        <div>
           { type == 1 && projectInfo.userCreator.id==userId?
                <div>
                <button style={{width:"100%", padding:"14px"}} onClick={onClick}> Incluir participante </button>
                </div>:<div></div>
            } 
            <div>
                {
                    usuarios.map((item,index) => 
                            <CardUser usuario={item} id={index} usuarioCreatorId={projectInfo.userCreator.id} usuarioId={userId}/>
                        
                    )
                }
            </div>

        </div>
    )
}

export default UsuariosProjetos;

