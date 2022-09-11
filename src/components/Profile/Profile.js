
import{UserContext} from "../../context/UserContext"
import{useState,useEffect} from "react"
import { Link } from "react-router-dom";
import axios from "axios";


const Profile = ({logout}) => {
  const userIdLocal = window.localStorage.getItem("UserId");
  const [infoUser, setInfoUser] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_URL}/users/${userIdLocal}`)
      .then((response) => {
        setInfoUser(response.data);
      });
  }, []);
  
  return (
    <>
    <button onClick={logout}><Link to="/">cerrarSesion</Link></button>
      <h1>¡Hola!</h1>
      <h1>{infoUser.name}</h1>
      
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