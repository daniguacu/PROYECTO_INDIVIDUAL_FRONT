
import { useNavigate } from "react-router-dom";
const EditProperty = ({propertyId}) => {
    const navigate=useNavigate()
    
    const redirect=()=>{
        navigate(`${propertyId}/form`)
    }
    

    
    
    
  
  return (
    <>        
        
    <button className="minibutton" onClick={redirect}>Editar</button>
        
             
      

      
     
    </>
  );
};

export default EditProperty;