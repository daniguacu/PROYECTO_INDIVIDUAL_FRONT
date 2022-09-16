
import{UserContext} from "../../context/UserContext"
import{useState,useEffect} from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import propertyimage from "../../images/properties.PNG"
import peopleimage from "../../images/tenants.jpg"
import clientimage from "../../images/clients.jpg"
import "./profile.css"


const Profile = () => {
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
      <div> <h1></h1></div>
      <h1>¡Hola!</h1>
      <h1>{infoUser.name}</h1>
      
      <h3>
        Aquí podrás realizar todas las gestiones de las propiedades que administras 
      </h3>
      <ul id="lista1">
      <li>
      
      <div className="circular--portrait">
      <Link to="/tenant"><img src={peopleimage}></img></Link>
      <div>Inquilinos</div>
      </div>
      </li>
      <li>
      <div className="circular--portrait">
      <Link to="/landlord"><img src={clientimage}></img></Link>
      <div>Clientes</div>
      </div>
      </li>
      <li>
      <div className="circular--portrait">
      <Link to="/property"><img src={propertyimage}></img></Link>
      <div>Propiedades</div>      
      </div>
      </li>
      
      </ul>
      

      
     
    </>
  );
};

export default Profile;