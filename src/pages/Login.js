import './Login.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Header from './Header';
import { Button } from 'react-bootstrap';
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
            localStorage.setItem('login', true)
            navigate('/')
        } else {
            alert('invalid Username or passsword...!')
        }

        const useEffect = (() => {
            let loggedIn = localStorage.getItem('login')
            if (loggedIn) {
                navigate("/")
            }
        }
        )
    }

    return (
        <>
            <Header />
            <div className='login'>
                <div className="loginDetails">
                    <form >
                        <label><b>Username </b><input type="text" name={username} onChange={(e) => setUsername(e.target.value)} /></label><br></br>
                        <label><b>Password </b><input type="text" name={password} onChange={(e) => setPassword(e.target.value)} /></label>
                    </form><br></br>
                    <div className='loginBtn'>
                        <Button onClick={handleLogin}>Login</Button>
                    </div>
                </div><br /><br/> <br /><br /><br/> <br /><br /><br/> <br /><br /><br/><br /><br/> <br /><br /><br/> <br />
                <Footer />
            </div>

        </>
    )
}

export default Login;
