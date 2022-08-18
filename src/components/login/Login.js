import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';


const initInfo = {
    email: "",
    password: "",
  };
  
const Login=({setUser})=> {

    const navigate = useNavigate();
    const [user, loginUser] = useState(false);
    const [isError, setIsError] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const [inputInfo, setInputInfo] = useState(initInfo);

    const login = () => {
        axios.post("http://localhost:3000/users/login/", inputInfo)
    
          .then(function (response) {
            if (response.data.token) {
                setInputInfo(initInfo);
                loginUser(true);    
                console.log("esto es la respuesta login:",response.data);
                setUser(response.data);                  
                navigate("profile");
            
            }
          })
          .catch(function (error) {
                console.log(error);
                setIsError(true);
                setInputInfo(initInfo);
          });
    };
    React.useEffect(() => {
        setDisabledButton(
          !(
            Object.values(inputInfo).every((field) => field.length) &&
            inputInfo.email.includes("@")
            )
        );
    }, [inputInfo]);
    
    
    const handlerChangeForm = (field) => (e) =>
        setInputInfo({ ...inputInfo, [field]: e.target.value });

    
    return (
        <>
        
        <div class="container" id="container">
            
            <div class="form-container sign-in-container">
                <form>
                    <h1>Inicia Sesion</h1>                                    
                    <input type="email" value={inputInfo.email} onChange={handlerChangeForm("email")} placeholder="Email" />
                    <input type="password" value={inputInfo.password} onChange={handlerChangeForm("password")} placeholder="Password" />
                    <button onClick={login}>Iniciar Sesion</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    
                    <div class="overlay-panel overlay-right">
                        <h1>Bienvenido a BeautyBook!</h1>
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