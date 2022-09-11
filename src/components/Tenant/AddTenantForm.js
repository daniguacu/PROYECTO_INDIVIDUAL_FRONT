import {useParams} from "react-router-dom"
import { useState,useEffect} from "react";
import axios from "axios";
const initInfo = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
   
    
  };


const AddTenantForm= () => {
    const params=useParams()
    const propertyid=(params.propertyId)
    console.log(propertyid)
    
    
    const [inputInfo, setInputInfo] = useState(initInfo)
    const [landlord, setLandlord] = useState("")
    const [property, setproperty] = useState(propertyid)
    
    const [success,setsuccess]=useState(false)
    

    const AddTenant= async ()=>{
        await axios.post(`http://localhost:3000/tenants/add`,{...inputInfo,property,landlord}).
        then(response=>{
          
          console.log(response.data)
          setsuccess(true)
          
          
          
          
        }).catch(error=>{
          console.log(error)
        })
    }

    const handlerChangeForm = (field) => (e) =>
    setInputInfo({ ...inputInfo, [field]: e.target.value });    
      
    
    
  useEffect(()=>{
      
      axios.get(`http://localhost:3000/properties/propertyId`,property).
        then(response=>{
          setLandlord(response.data.landlord)
          console.log(response.data)
          
          
        }).catch(error=>{
          console.log(error)
        })
  },[])
    
    
    
    
  
  return (
    <>        
        
        <h1>Formulario Agregar</h1>
        
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
        
        
        <button onClick={AddTenant}>Agregar</button>

        {
                success && <p className="p_error">Se ha agregado el inquilino</p>
                }
       
        
             
      

      
     
    </>
  );
};

export default AddTenantForm;