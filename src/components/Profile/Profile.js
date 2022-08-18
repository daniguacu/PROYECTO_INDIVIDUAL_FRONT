
import{UserContext} from "../../context/UserContext"
import{useContext} from "react"


const Profile = () => {
    const user=useContext(UserContext)
    console.log(user.user)
  
  return (
    <>
      <h1>¡Hola!</h1>
      <h2>Tus Productos</h2>
      <h3>
        Aquí podrás agendar tus mantenimientos 
      </h3>
      
     
    </>
  );
};

export default Profile;