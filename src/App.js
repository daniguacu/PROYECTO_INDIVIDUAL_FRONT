import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import { UserContext } from "./context/UserContext";


import { useState } from "react";
import Home from "./components/Home/Home"
import Property from './components/Property/Property';
import Landlord from './components/Landlord/Landlord';
import Tenant from './components/Tenant/Tenant';
import LandlordForm from './components/Landlord/LandlordForm';
import PropertyForm from './components/Property/PropertyForm';
import CreateLandlord from './components/Landlord/CreateLandlord';
import PropertyEditForm from './components/Property/PropertyEditForm';
import AddTenantForm from './components/Tenant/AddTenantForm';
import TenantEditForm from './components/Tenant/TenantEditForm';

function App() {
  const [user, setUser] = useState();
  
  console.log({user})
  
  
  return (
    <div className="App">
      <UserContext.Provider value={{ user }}> 
            
      <BrowserRouter>
      
      <Routes>
      <Route exact path="/" element={<Home setUser={setUser}/>} />
      <Route exact path="register" element={<Register />} />
      <Route exact path="profile" element={<Profile />} />
      <Route exact path="property" element={<Property />} />
      <Route exact path="landlord" element={<Landlord />} />
      <Route exact path="tenant" element={<Tenant />} />
      <Route exact path="landlord/:landlordId/form" element={<LandlordForm />} />
      <Route exact path="landlord/register" element={<CreateLandlord/>} />
      <Route exact path="landlord/:landlordId/propertyform" element={<PropertyForm/>} />
      <Route exact path="property/:propertyId/form" element={<PropertyEditForm/>} />
      <Route exact path="property/:propertyId/" element={<AddTenantForm/>} />
      <Route exact path="tenant/:tenantId/form" element={<TenantEditForm/>} />
      
      </Routes>
      </BrowserRouter>
      
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
