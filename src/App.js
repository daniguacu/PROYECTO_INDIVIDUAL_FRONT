import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  console.log({user})
  
  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>       
      <BrowserRouter>
      
      <Routes>
      
      <Route exact path="register" element={<Register />} />
      <Route exact path="profile" element={<Profile />} />
      <Route exact path="login" element={<Login setUser={setUser}/>}/>
      </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
