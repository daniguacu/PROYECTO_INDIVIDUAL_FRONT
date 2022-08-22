import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';



  
const Login=({setUser})=> {

    const navigate = useNavigate();
    const [user, loginUser] = useState(false);
    
    const [isError, setIsError] = useState(false);
    
    
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    
    
    
    
    
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/users/login/", {email,password})
    
          .then(function (response) {
            if (response.data.token) {
                setemail("")
                setpassword("")
                loginUser(true); 
                setUser(response.data)   
                console.log(response.data.token)
                navigate("/profile")
                
                             
                
                
            
            }
          })
          .catch(function (error) {
                console.log(error);
                setIsError(true);
                setemail("")
                setpassword("")
          });
        
            
            
        
    }
    

    
        return (
            <>
            
            <div className="container" id="container">
                
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Inicia Sesion</h1>                                    
                        <input type="email" id="email"  onChange={(e)=>setemail(e.target.value)} value={email} placeholder="Email" />
                        <input type="password" id="password" onChange={(e)=>setpassword(e.target.value)}value={password} placeholder="Password" />
                        <button>sign in</button>
                        
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        
                        <div className="overlay-panel overlay-right">
                            <h1>Bienvenido a ManagementFolio!</h1>
                            <p>Si todavia no tienes una cuenta, registrate con nosostros</p>
                            <Link to="/register"><button class="ghost" id="signUp">Registrarse</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                user && <p className="p_error">Has iniciado sesion</p>
                }
          
                {
                isError && <p className="p_error">Ha ocurrido un error</p>
                }
            </>
            
        );
      }
      
      export default Login;