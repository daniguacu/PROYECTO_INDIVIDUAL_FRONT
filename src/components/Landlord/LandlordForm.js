import {useParams} from "react-router-dom"
import { useState,useEffect} from "react";
import axios from "axios";
const LandlordForm = () => {
    
    const params=useParams()
    const landlordid=params.landlordId
    const[landlord,setLandlord]=useState()
    console.log(landlordid)

    const getLandlord= async ()=>{
        await axios.get(`http://localhost:3000/landlords/${landlordid}`).
        then(response=>{
          setLandlord(response.data)
          console.log(landlord)
          
          
          
        }).catch(error=>{
          console.log(error)
        })
      }

    useEffect(()=>{
        getLandlord();
    },[])

    const EditLandlord=()=>{
      console.log("esta metodo edita el landlord")
    }

    
    
    
  
  return (
    <>        
        
        <h1>Formulario Editar</h1>
        
        <label>
          Nombre
          <h4>{landlord.name}</h4>
          <input type='text'/>   
        </label>
        <label>
          Apellido
          <h4>{landlord.lastname}</h4>
          <input type='text'/>   
        </label>
        <label>
          E-mail
          <h4>{landlord.email}</h4>
          <input type='email'/>   
        </label>
        <label>
          Phone
          <h4>{landlord.phone}</h4>
          <input type='text'/>   
        </label>
        <button onClick={EditLandlord}>Actualizar</button>
       
        
             
      

      
     
    </>
  );
};
export default LandlordForm;