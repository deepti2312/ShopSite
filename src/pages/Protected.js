import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const { Component } = props

    const navigate = useNavigate();

    useEffect(() => {
        let user = localStorage.getItem('login')
        if (!user) {
            navigate('/')
        } else {
            navigate('/login')
        }
    })

    return (
        <>
            <div>
                <Component />
            </div>
        </>
    )
}

export default Protected;
