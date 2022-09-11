import { useNavigate } from "react-router-dom";
const EditTenant = ({tenantId}) => {
    const navigate=useNavigate()
    
    const redirect=()=>{
        navigate(`${tenantId}/form`)
    }
    

    
    
    
  
  return (
    <>        
        
    <button className="minibutton" onClick={redirect}>Editar</button>
        
             
      

      
     
    </>
  );
};

export default EditTenant;