import React from "react";
import { useContext, useState, useEffect } from "react";
import "../common/App.css";
import { AuthContext } from "../auth/AuthContext";
import axios from "axios";
import Loading from "./Loading";

export default function Navbar() {

    const { token, logout } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 2000)); 

                if (token) {
                    const response = await axios({
                        method: 'get',
                        url: `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    console.log(response.data.user);
                    setUser(true);
                    setLoading(false);
                } else {
                    setUser(false);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                setUser(false);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [token]);

    const handleLogout = () => {
        setLoading(true);
        logout();
    };

    return (
    <nav className="navbar">
        <ul className="navbar-list">
            {loading && <Loading />}
            {!loading && user && (
                <>
                    <li className="navbar-item"><a href="/">Inicio</a></li>
                    <li className="navbar-item"><a href="/profile">Perfil</a></li>
                    <li className="navbar-item"><a onClick={handleLogout}>Cerrar Sesión</a></li>
                </>
            )}
            {!loading && !user && (
                <>
                    <li className="navbar-item"><a href="/login">Iniciar Sesión</a></li>
                    <li className="navbar-item"><a href="/signup">Registrarse</a></li>
                </>
            )}
        </ul>
    </nav>
);
}