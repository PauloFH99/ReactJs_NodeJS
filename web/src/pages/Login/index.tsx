import React, { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './style.css';
import api from "../../services/api";
import Footer from "../../components/footer";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordShown, setisPasswordShown] = useState(false);
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
      
            await api.post('auth', { email, password })
                .then(() => {
                    alert(`Bem vindo ${email} !`);
                    history.push('/home');
                }).catch(() => {
                    alert('Erro no login!');
                })
        

    }

    function togglePasswordVisiblity() {
        if (isPasswordShown == true)
            setisPasswordShown(false);
        else
            setisPasswordShown(true);
    };

    return (

        <div id="page-home" >
            <div className="page-middle">
                <form onSubmit={handleSubmit} className="login-user-form">
                    <h1>BEM-VINDO</h1>
                    <div className="containercenter">
                        <hr />
                        <div className="container">
                            <div className="input-block">
                                <label htmlFor="email">Login</label>
                                <input id="email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <i
                                    className="fa fa-eye password-icon"
                                    onClick={togglePasswordVisiblity}
                                />
                            </div>
                            <div className="input-block">
                                <label htmlFor="password">Senha</label>
                                <input id="password"
                                    type="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="containerpsw" >
                                <input type="checkbox" name="remember" /> Lembre-me
                            <span className="psw">

                                </span>
                            </div>
                        </div>
                        <button className="login-button" type="submit" >ENTRAR</button>
                        <div className="containerpsw" >

                            <Link to="/register">
                                Não tem uma conta? <strong > Registre-se </strong>
                            </Link>
                        </div>


                    </div>

                </form>

            </div>
            <Footer />

        </div>



    )

}
export default Login;