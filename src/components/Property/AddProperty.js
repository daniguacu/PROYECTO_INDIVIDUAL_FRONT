
import { useNavigate } from "react-router-dom";
const AddProperty = ({landlordId}) => {
    const navigate=useNavigate()
    
    const redirect=()=>{
        navigate(`${landlordId}/propertyform`)
    }
    

    
    
    
  
  return (
    <>        
        
    <button className="minibutton" onClick={redirect}>Agregar Propiedad</button>
        
             
      

      
     
    </>
  );
};

export default AddProperty;