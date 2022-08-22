import Login from "../Login/Login";

function Home({setUser}) {
  return (
    <div className="home">
      <Login setUser={setUser}></Login >
      
    </div>
  );
}

export default Home;