import axios from "axios";
import { useState } from "react";

const DeleteTenant = ({tenantId}) => {
    const [success, setIssucces] = useState(false);
    
    const remove=async()=>{
        await axios.delete(`http://localhost:3000/tenants/${tenantId}`).
        then(response=>{
          
          setIssucces(true)
          
          
          
        }).catch(error=>{
          console.log(error)
        })

    }
    
    
    
  
  return (
    <>        
        
    <button className="minibutton" onClick={remove}>Borrar</button>
    {
    success && <p className="p_error">Inquilino Borrada con Exito</p>
    }
        
             
      

      
     
    </>
  );
};

export default DeleteTenant;