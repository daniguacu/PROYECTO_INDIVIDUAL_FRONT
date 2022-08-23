import {useParams} from "react-router-dom"
import { useState,useEffect} from "react";
import axios from "axios";
const initInfo = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
};
const LandlordForm = () => {
    
    const params=useParams()
    const landlordid=params.landlordId
    const[landlord,setLandlord]=useState()
    const [inputInfo, setInputInfo] = useState(initInfo)
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

    const EditLandlord=async()=>{
      await axios.patch(
        `http://localhost:3000/landlords/${landlordid}`,
        inputInfo,
        
      )
      .then(function (response) {
          console.log("success");
          setTimeout(() => {
          console.log("redirect");
        }, 2000); 
        
        
        
        
      })
    }
    const handlerChangeForm = (field) => (e) =>
    setInputInfo({ ...inputInfo, [field]: e.target.value });
    console.log(landlord)
    
    
    
  
  return (
    <>        
        
        <h1>Formulario Editar</h1>
        
        <label>
          Nombre
          
          <input type='text' value={inputInfo.name}onChange={handlerChangeForm("name")}/>   
        </label>
        <label>
          Apellido
          
          <input type='text' value={inputInfo.lastname}onChange={handlerChangeForm("lastname")}/>   
        </label>
        <label>
          E-mail
          
          <input type='email' value={inputInfo.email}onChange={handlerChangeForm("email")}/>   
        </label>
        <label>
          Phone
          
          <input type='text' value={inputInfo.phone}onChange={handlerChangeForm("phone")}/>   
        </label>
        <button onClick={EditLandlord}>Actualizar</button>
       
        
             
      

      
     
    </>
  );
};
export default LandlordForm;