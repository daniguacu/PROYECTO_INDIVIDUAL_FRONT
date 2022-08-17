import './login.css';
function Login() {
    return (
        <>
        
        <div class="container" id="container">
            
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Inicia Sesion</h1>                                    
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Olvidaste tu contraseña?</a>
                    <button>Iniciar Sesion</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    
                    <div class="overlay-panel overlay-right">
                        <h1>Bienvenido a BeautyBook!</h1>
                        <p>Si todavia no tienes una cuenta, registrate con nosostros</p>
                        <button class="ghost" id="signUp">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
  }
  
  export default Login;