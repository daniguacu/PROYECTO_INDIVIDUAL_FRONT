import{UserContext} from "../../context/UserContext"
import{useContext,useEffect,useState} from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import EditProperty from "../Property/EditProperty";
import EditTenant from "./EditTenant";
import DeleteTenant from "./DeleteTenant";


const Tenant = () => {
    
    const[tenant,setTenant]=useState([]) //datos de forma dinamica 
    const[tenantTable,setTenantTable]=useState([])//datos de forma estática 
    const[search,setSearch]=useState([])//datos de forma estática 
    
    

    const gettenants= async ()=>{
      await axios.get("http://localhost:3000/tenants").
      then(response=>{
        setTenant(response.data)
        setTenantTable(response.data)
       
       
        
      }).catch(error=>{
        console.log(error)
      })
    }
    useEffect(()=>{
      gettenants();
    },[])
    const handleChange=(e)=>{
      setSearch(e.target.value)
      console.log("Búsqueda"+e.target.value)
      filter(e.target.value)

    }
    const filter=(parameter)=>{
      var researchResult=tenantTable.filter((l)=>{
        if(l.name.toString().toLowerCase().includes(parameter.toLowerCase())){
          return l
        }
    });
    setTenant(researchResult)
    

    }
    
    

  
  return (
    <>
      <div className="containerInput">
        <input className="form-control inputBuscar" value={search} placeholder="Busqueda por Nombre" onChange={handleChange} />
        
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </div>
      
      <h3>
        Aquí podrás realizar todas las gestiones de los inquilinos
      </h3>
      
      <div className="table-responsive">
        <table className="table table-sm table bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>email</th>
              <th>Teléfono</th>
              <th>Propiedad</th>
              <th>Landlord</th>
              
            </tr>
          </thead>
          <tbody>{
            tenant &&
            tenant.map((tenant)=>(
              <tr key={tenant._id}>
                <td>{tenant.name}</td>
                <td>{tenant.lastname}</td>
                <td>{tenant.email}</td>
                <td>{tenant.phone}</td>

                <td>{tenant.address}</td>
                <td>{tenant.landlordname}</td>
                <EditTenant tenantId={tenant._id}></EditTenant>
                <DeleteTenant tenantId={tenant._id}></DeleteTenant>
                
                
                
                
                 
                  
                

                
                
                
              </tr>
            ))}</tbody>
        </table>
      </div>
        
      
      
      

      
     
    </>
  );
};

export default Tenant;