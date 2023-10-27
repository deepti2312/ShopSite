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
    },[])
    
    return (
        <>
            <Header />
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div class="card card0 border-0">
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <div class="card1 pb-5">
                                <div class="row">
                                    <img src="https://i.imgur.com/CXQmsmF.png" alt='logo' class="logo" />
                                </div>
                                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://i.imgur.com/uNGdWHi.png" alt='logo' class="image" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card2 card border-0 px-4 py-5">
                                <div class="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"><b>Username</b></h6></label>
                                    <input class="mb-4" type="text" placeholder="@demo123" name={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div class="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"><b>Password</b></h6></label>
                                    <input type="password" placeholder="Enter password" name={password} onChange={(e) => setPassword(e.target.value)} />
                                </div><br />

                                <div class="row mb-3 px-3">
                                    <button type="submit" class="btn btn-blue text-center" onClick={handleLogin}><b>Login</b></button>
                                </div>
                                <div class="row mb-4 px-3">
                                    <small class="font-weight-bold">Don't have an account? <a class="text-danger " href="/#">Register</a></small>
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
