import {useParams} from "react-router-dom"
import { useState,useEffect} from "react";
import axios from "axios";


const PropertyForm= () => {
    const params=useParams()
    const landlordid=params.landlordId
    
    const[property,setProperty]=useState()
    const [address, setAddress] = useState("")
    const [landlord, setLandlord] = useState("")
    

    const AddProperty= async ()=>{
        await axios.post(`http://localhost:3000/properties/add`,{address,landlord}).
        then(response=>{
          setProperty(response.data)
          console.log(response.data)
          setAddress("")
          
          
          
        }).catch(error=>{
          console.log(error)
        })
    }

            
      
    
    const handleChange=(e)=>{
      setAddress(e.target.value)
      

    }
  useEffect(()=>{
      setLandlord(landlordid);
  },[])
    
    
    
    
  
  return (
    <>        
        
        <h1>Formulario Agregar</h1>
        
        <label>
          Dirección
          
          <input type='text' value={address} onChange={handleChange} />   
        </label>
        
        <button onClick={AddProperty}>Agregar</button>
       
        
             
      

      
     
    </>
  );
};

export default PropertyForm;