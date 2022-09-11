import{UserContext} from "../../context/UserContext"
import{useContext,useEffect,useState} from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import EditProperty from "./EditProperty";
import AddTenant from "../Tenant/AddTenant";
import DeleteProperty from "./DeleteProperty";



const Property = () => {
    
    const[property,setProperty]=useState([]) //datos de forma dinamica 
    const[propertyTable,setPropertyTable]=useState([])//datos de forma estática 
    const[search,setSearch]=useState([])//datos de forma estática 
    const{landlordname,Setlandlordname}=useState([])
    

    const getproperties= async ()=>{
      await axios.get("http://localhost:3000/properties").
      then(response=>{
        setProperty(response.data)
        setPropertyTable(response.data)
       
       
        
      }).catch(error=>{
        console.log(error)
      })
    }
    useEffect(()=>{
      getproperties();
    },[])
    const handleChange=(e)=>{
      setSearch(e.target.value)
      console.log("Búsqueda"+e.target.value)
      filter(e.target.value)

    }
    const filter=(parameter)=>{
      var researchResult=propertyTable.filter((l)=>{
        if(l.name.toString().toLowerCase().includes(parameter.toLowerCase())){
          return l
        }
    });
    setProperty(researchResult)
    

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
        Aquí podrás realizar todas las gestiones de las propiedades
      </h3>
      
      <div className="table-responsive">
        <table className="table table-sm table bordered">
          <thead>
            <tr>
              <th>Direccion</th>
              <th>Landlord</th>
              
            </tr>
          </thead>
          <tbody>{
            property &&
            property.map((property)=>(
              <tr key={property._id}>
                
                <td>{property.address}</td>
                <td>{property.landlordname}</td>
                <EditProperty propertyId={property._id}></EditProperty>
                <AddTenant propertyId={property._id}></AddTenant>
                <DeleteProperty propertyId={property._id}></DeleteProperty>
                
                
                 
                  
                

                
                
                
              </tr>
            ))}</tbody>
        </table>
      </div>
        
      
      
      

      
     
    </>
  );
};

export default Property;