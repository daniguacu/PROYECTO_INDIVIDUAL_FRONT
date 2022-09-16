import {useParams} from "react-router-dom"
import { useState,useEffect} from "react";
import axios from "axios";
const initInfo = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
};
const TenantEditForm = () => {
    
    const params=useParams()
    const tenantId=params.tenantId
    const[tenant,setTenant]=useState()
    const [inputInfo, setInputInfo] = useState(initInfo)
    console.log(tenantId)
    const[success,setsuccess]=useState(false)
    const [isError,setIsError]=useState(false)

    

    const Edittenant=async()=>{
      await axios.patch(
        `http://localhost:3000/tenants/${tenantId}`,
        inputInfo
        
      )
      .then(function (response) {
          console.log("success");
          setsuccess(true)
          if(response.data==="tenant exists"){
            setIsError(true)
            setsuccess(false)
          }
          setTimeout(() => {
          console.log("redirect");
        }, 2000); 
        
        
        
        
      })
    }
    const handlerChangeForm = (field) => (e) =>
    setInputInfo({ ...inputInfo, [field]: e.target.value });
   
    
    
    
  
  return (
    <>        
        
        <h1>Formulario Editar</h1>
        
        <label>
          Nombre
          
          <input type='text' value={inputInfo.name}onChange={handlerChangeForm("name")}/>   
        </label>
        <label>
          Apellido
          
          <input type='text' value={inputInfo.lastname}onChange={handlerChangeForm("lastname")}/>   
        </label>
        <label>
          E-mail
          
          <input type='email' value={inputInfo.email}onChange={handlerChangeForm("email")}/>   
        </label>
        <label>
          Phone
          
          <input type='text' value={inputInfo.phone}onChange={handlerChangeForm("phone")}/>   
        </label>
        
        
        
        
        <button onClick={Edittenant}>Actualizar</button>
        {
                success && <p className="p_error">Se ha Edotado el inquilino  con exito</p>
                }
                {isError && <p className="p_error">Ya existe un inquilino con este correo</p>}
       
        
             
      

      
     
    </>
  );
};
export default TenantEditForm;