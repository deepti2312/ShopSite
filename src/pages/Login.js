import './Login.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const users = useSelector(state => state.shop.users)
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();

        const user = users.find((user) => user.username === username && user.password === password)
        if (user) {

            let login = true
            localStorage.setItem('login', JSON.stringify(login))
            navigate('/')
        } else {
            alert('invalid Username or passsword...!')
        }

    }
    useEffect(()=>{
        if(localStorage.getItem("login") === "true"){
            navigate("/")
        }
    })
    
    return (
        <>
            <Header />
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row">
                                    <img src="https://i.imgur.com/CXQmsmF.png" alt='logo' className="logo" />
                                </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://i.imgur.com/uNGdWHi.png" alt='logo' className="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row px-3">
                                    <div className="mb-1"><h6 className="mb-0 text-sm"><b>Username</b></h6></div>
                                    <input className="mb-4" type="text" id="username" placeholder="@username123" name={username} autoComplete='off' onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="row px-3">
                                    <div className="mb-1"><h6 className="mb-0 text-sm"><b>Password</b></h6></div>
                                    <input type="password" id="password" placeholder="Enter password" name={password} autoComplete='off' onChange={(e) => setPassword(e.target.value)} />
                                </div><br />

                                <div className="row mb-3 px-3">
                                    <button type="submit" className="btn btn-blue text-center" onClick={handleLogin}><b>Login</b></button>
                                </div>
                                <div className="row mb-4 px-3">
                                    <small className="font-weight-bold">Don't have an account? <a className="text-danger " href="/login">Register</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;
