import{UserContext} from "../../context/UserContext"
import{useContext} from "react"
const Property = () => {
    const user=useContext(UserContext)
    console.log(user.user.name)
  
  return (
    <>
      
      
      <h3>
        Aquí podrás realizar todas las gestiones de las propiedades
      </h3>
      
      <button>Consultar Propiedades</button>
      <button>Borrar Propiedades</button>
      <button>Editar Propiedad</button>

      
     
    </>
  );
};

export default Property;