import React, { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from "react-router-dom";
import './style.css';
import api from "../../services/api";
import Footer from "../../components/footer";


function Register() {
    const goBack = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShown, setisPasswordShown] = useState(false);
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await api.post('users', { name, email, password })
            .then(() => {
                
                alert('Cadastro realizado com sucesso!');
                goBack.push('/');
            }).catch(() => {
                alert('Erro no cadastro!');
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
                    <Link to="/" className="back">
                        Voltar para login
                        <FiArrowLeft size={24} color="#FFF" />
                    </Link>
                    <h1>Crie sua conta</h1>

                    <div className="containercenter">
                        <hr />
                        <div className="container">
                            <div className="input-block">
                                <label htmlFor="email">Nome</label>
                                <input id="name"
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                />
                                <i
                                    className="fa fa-eye password-icon"
                                    onClick={togglePasswordVisiblity}
                                />
                            </div>
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
                        </div>
                        <button className="login-button" type="submit" >CADASTRAR</button>

                    </div>

                </form>

            </div>
            <Footer />

        </div>



    )

}
export default Register;