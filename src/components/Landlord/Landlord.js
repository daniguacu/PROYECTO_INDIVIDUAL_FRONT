import{UserContext} from "../../context/UserContext"
import{useContext} from "react"

const Landlord = () => {
    const user=useContext(UserContext)
    console.log(user.user.name)
  
  return (
    <>
      
      
      <h3>
        Aquí podrás realizar todas las gestiones de las propiedades
      </h3>
      
      <button>Crear Cliente </button>
      <button>Borrar Cliente</button>
      <button>Editar Cliente</button>

      
     
    </>
  );
};

export default Landlord;