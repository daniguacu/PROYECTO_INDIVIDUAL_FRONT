import {useParams} from "react-router-dom"
import { useState,useEffect} from "react";
import axios from "axios";
const initInfo = {
  address: ""
};
const PropertyEditForm = () => {
    
    const params=useParams()
    const propertyid=params.propertyId
    const[property,setProperty]=useState()
    const [inputInfo, setInputInfo] = useState(initInfo)
    const[success,setsuccess]=useState(false)
    
    const [isError,setIsError]=useState(false)
    console.log(propertyid)

    

    const Editprop=async()=>{
      await axios.patch(
        `http://localhost:3000/properties/${propertyid}`,
        inputInfo
        
      )
      .then(function (response) {
          console.log("success");
          setsuccess(true)
          setsuccess(true)
          if(response.data==="property exists"){
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
          Digite la Dirección
          
          <input type='text' value={inputInfo.address}onChange={handlerChangeForm("address")}/>   
        </label>
        
        
        
        <button onClick={Editprop}>Actualizar</button>
        {
                success && <p className="p_error">Se ha Edtado la dirección con exito</p>
                }
       {isError && <p className="p_error">Ya existe una propiedad con esta direccion</p>}
        
             
      

      
     
    </>
  );
};
export default PropertyEditForm;