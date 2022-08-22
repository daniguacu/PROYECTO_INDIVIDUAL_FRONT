import{UserContext} from "../../context/UserContext"
import{useContext} from "react"
const Tenant = () => {
    const user=useContext(UserContext)
    console.log(user.user.name)
  
  return (
    <>
      
      
      <h3>
        Aquí podrás realizar todas las gestiones de tus Inquilinos
      </h3>
      <button> Crear Inquilinos</button>
      <button>Consultar inquilinos</button>
      <button>Borrar Inquilino</button>
      <button>Actualizar Inquilino</button>

      
     
    </>
  );
};

export default Tenant;