import axios from "axios";
import { useState } from "react";

const DeleteLandlord = ({landlordId}) => {
    const [success, setIssucces] = useState(false);
    
    const remove=async()=>{
        await axios.delete(`http://localhost:3000/landlords/${landlordId}`).
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
    success && <p className="p_error">Cliente Borrado con Exito</p>
    }
        
             
      

      
     
    </>
  );
};

export default DeleteLandlord;