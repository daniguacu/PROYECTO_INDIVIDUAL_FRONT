
import { useNavigate,Link } from "react-router-dom";
import edit from "../../images/edit.jpg"
import "./property.css"
const EditProperty = ({propertyId}) => {
    const navigate=useNavigate()
    
    const redirect=()=>{
        navigate(`${propertyId}/form`)
    }
    

    
    
    
  
  return (
    <>        
        
    <button onClick={redirect}className="minibutton">Editar</button>
        
             
      

      
     
    </>
  );
};

export default EditProperty;