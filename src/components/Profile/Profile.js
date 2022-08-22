
import{UserContext} from "../../context/UserContext"
import{useContext} from "react"
import { Link } from "react-router-dom";


const Profile = () => {
    const user=useContext(UserContext)
    console.log(user.user.name)
  
  return (
    <>
      <h1>¡Hola!</h1>
      <h1>{user.user.name}</h1>
      
      <h3>
        Aquí podrás realizar todas las gestiones de tus propiedades
      </h3>
      <Link to="/tenant"><button>Inquilinos</button></Link>
      <Link to="/landlord"><button>Clientes</button></Link>
      <Link to="/property"><button>Propiedades</button></Link>

      
     
    </>
  );
};

export default Profile;