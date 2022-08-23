
import { useNavigate } from "react-router-dom";
const EditLandlord = ({landlordId}) => {
    const navigate=useNavigate()
    
    const redirect=()=>{
        navigate(`${landlordId}/form`)
    }
    

    
    
    
  
  return (
    <>        
        
    <button className="minibutton" onClick={redirect}>Editar</button>
        
             
      

      
     
    </>
  );
};

export default EditLandlord;