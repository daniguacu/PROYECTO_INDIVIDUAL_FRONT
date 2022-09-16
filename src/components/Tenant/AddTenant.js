
import { useNavigate,Link } from "react-router-dom";
import "./tenant.css"
import add from "../../images/add.jpg"
const AddTenant = ({propertyId}) => {
    const navigate=useNavigate()
    
    const redirect=()=>{
        navigate(`${propertyId}`)
    }
    

    
    
    
  
  return (
    <>        
        
    
        <button className="minibutton" onClick={redirect}>Agregar Inquilino</button>
             
      

      
     
    </>
  );
};

export default AddTenant;