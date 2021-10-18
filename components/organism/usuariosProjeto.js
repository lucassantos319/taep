import CardUser from "../molecules/cardUsuario";

const UsuariosProjetos = ({projectInfo,usuarios,type,onClick,userId}) => {
    
    const i= 0;
    return(
        
        <div >
           { type == 1 && projectInfo.userCreator.id==userId?
                <div>
                <button style={{width:"100%", padding:"14px"}} onClick={onClick}> Vincular usuario </button>
                </div>:<div></div>
            } 
            <div>
                {
                    
                    usuarios.array.forEach(element => {
                        i++;
                        <CardUser id={i} usuario={element} />
                    })
                }
            </div>

        </div>
    )
}

export default UsuariosProjetos;

