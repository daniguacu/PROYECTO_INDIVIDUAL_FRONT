import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./property.css"
import removed from "../../images/remove.jpg"

const DeleteProperty = ({propertyId}) => {
    const [success, setIssucces] = useState(false);
    
    const remove=async()=>{
        await axios.delete(`http://localhost:3000/properties/${propertyId}`).
        then(response=>{
          
          setIssucces(true)
          
          
          
        }).catch(error=>{
          console.log(error)
        })

    }
    
    
    
  
  return (
    <>        
    
    <button className="minibutton"onClick={remove}>Borrar</button>
    {
    success && <p className="p_error">propiedad Borrada con Exito</p>
    }
        
             
      

      
     
    </>
  );
};

export default DeleteProperty;