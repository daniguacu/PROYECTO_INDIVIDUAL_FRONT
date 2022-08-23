import{UserContext} from "../../context/UserContext"
import{useContext,useEffect,useState} from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./landlord.css"

const Landlord = () => {
    const user=useContext(UserContext)
    const[landlord,setLandlord]=useState([]) //datos de forma dinamica 
    const[landlordTable,setLandlordTable]=useState([])//datos de forma estática 
    const[search,setSearch]=useState([])//datos de forma estática 
    console.log(user.user.name)

    const getLandlords= async ()=>{
      await axios.get("http://localhost:3000/landlords").
      then(response=>{
        setLandlord(response.data)
        setLandlordTable(response.data)
      }).catch(error=>{
        console.log(error)
      })
    }
    useEffect(()=>{
      getLandlords();
    },[])
    const handleChange=(e)=>{
      setSearch(e.target.value)
      console.log("Búsqueda"+e.target.value)
      filter(e.target.value)

    }
    const filter=(parameter)=>{
      var researchResult=landlordTable.filter((l)=>{
        if(l.name.toString().toLowerCase().includes(parameter.toLowerCase())){
          return l
        }
    });
    setLandlord(researchResult)

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
              <th>Nombre</th>
              <th>Apellido</th>
              <th>telefono</th>
              <th>email</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{
            landlord &&
            landlord.map((landlord)=>(
              <tr key={landlord._id}>
                
                <td>{landlord.name}</td>
                <td>{landlord.lastname}</td>
                <td>{landlord.phone}</td>
                <td>{landlord.email}</td>
                <button className="minibutton">Borrar</button>
                <button className="minibutton">Editar</button>
                <button className="minibutton">Agregar propiedad</button>
              </tr>
            ))}</tbody>
        </table>
      </div>
        
      
      <button>Crear Cliente </button>
      

      
     
    </>
  );
};

export default Landlord;