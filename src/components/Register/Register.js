import React from "react";
import axios from "axios";
import { useState } from "react";


const initInfo = {
  name: "",
  lastname:"",
  email: "",
  password: "",
  
};

const Register = () => {
  const [registerUser, setNewRegisterUser] = useState(false);
  const [isError, setIsError] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [inputInfo, setInputInfo] = useState (initInfo);
 
  const addUser = () => {
      axios.post (`${process.env.REACT_APP_BACK_URL}/users/register`, inputInfo) 

      .then(function (response) {
          console.log('success');
          setNewRegisterUser(true);
          setInputInfo(initInfo);
          setTimeout (()=> {
            console.log('redirect');
          }, 2000); 
          })
        .catch(function (error) {
          console.log(error);
          setIsError(true);
          setInputInfo(initInfo);
        })}




  React.useEffect(()=>{
      setDisabledButton(!(Object.values(inputInfo).every(field=>field.length) && inputInfo.email.includes('@'))) 
  },[inputInfo]);


  const handlerChangeForm = field => e => setInputInfo({...inputInfo, [field]: e.target.value });

  return (
      <>
      <h1>Pagina de Registro</h1>
      <label>
          E-mail
          <input type='email'  value={inputInfo.email} onChange={handlerChangeForm('email')}/>   
      </label>
      <br></br>
      <label>
          Nombre
          <input type='text' value={inputInfo.name} onChange={handlerChangeForm('name')}/>
      </label>
      <br></br>
      <label>
          Apellido
          <input type='text' value={inputInfo.lastname} onChange={handlerChangeForm('lastname')}></input>
      </label>
      <br></br>
      
      <br></br>
          Contraseña
          <input type='password' value={inputInfo.password} onChange={handlerChangeForm('password')}></input>
      <br></br>
      <button onClick={addUser} disabled={disabledButton}>Crear usuario</button>
      
      {
          registerUser && <p className="p_success">Tu cuenta ha sido creada</p>
          }
          {
          isError && <p className="p_error">Ha ocurrido un error</p>
          }
      
      </>
      
  )
}

export default Register;