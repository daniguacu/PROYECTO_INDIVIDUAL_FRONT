
import { useNavigate } from "react-router-dom";
const AddTenant = ({propertyId}) => {
    const navigate=useNavigate()
    
    const redirect=()=>{
        navigate(`${propertyId}/tenantform`)
    }
    

    
    
    
  
  return (
    <>        
        
    <button className="minibutton" onClick={redirect}>Agregar Inquilino</button>
        
             
      

      
     
    </>
  );
};

export default AddTenant;