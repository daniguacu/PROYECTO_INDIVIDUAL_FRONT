
import{UserContext} from "../../context/UserContext"
import{useState,useEffect} from "react"
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./header.css"
import home from"../../images/home.jpg"



const Header = ({logout}) => {
    const { user } = useContext(UserContext);
  const userIdLocal = window.localStorage.getItem("UserId");
  const [infoUser, setInfoUser] = useState([]);
  let location = useLocation();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_URL}/users/${userIdLocal}`)
      .then((response) => {
        setInfoUser(response.data);
      });
  }, []);
  const buttonChange = () => {
    if (!user) {
      return (
       
          <Link to="/" className="linkHeader"><img src={home} className="imghome"></img>    
          </Link>
        
      );
    } else {
      
        return (
          <div className="ButtonProfile">
            <div className="dropdown">
            
              <div class="dropdown-content">
                
                <div>
                  <button className="loginButton" onClick={logout}>
                    <Link to="/"> CERRAR SESION </Link>
                  </button>
                </div>
                
                
                <div>
                
                <Link to="/profile"><img src={home} className="imghome"></img> </Link>
                    
                </div>
               
               
              </div>
              
            </div>
          </div>
        );
      
    }
  };
  
  return (
    <>
    <div>{buttonChange()}</div>

      
     
    </>
  );
};

export default Header;