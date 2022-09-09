import {useParams} from "react-router-dom"
import { useState,useEffect} from "react";
import axios from "axios";
const initInfo = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
};
const CreateLandlord = () => {
    
    
    
    const[landlord,setLandlord]=useState()
    const [inputInfo, setInputInfo] = useState(initInfo)
    const [success, setIssucces] = useState(false);
    

    const createLandlord= async ()=>{
        await axios.post(`http://localhost:3000/landlords/register`,inputInfo).
        then(response=>{
          setLandlord(response.data)
          setIssucces(true)
          
          
          
        }).catch(error=>{
          console.log(error)
        })
      }

    

    
    const handlerChangeForm = (field) => (e) =>
    setInputInfo({ ...inputInfo, [field]: e.target.value });
    console.log(landlord)
    
    
    
  
  return (
    <>        
        
        <h1>Formulario Crear</h1>
        
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
        <button onClick={createLandlord}>Crear</button>
        {
                success && <p className="p_error">Se ha Creado el landlord con exito</p>
                }
       
        
             
      

      
     
    </>
  );
};
export default CreateLandlord;