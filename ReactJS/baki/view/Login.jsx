import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import qs from 'qs';
import '../style/Login.scss';
import { useAuthentication } from "../src/authorization/AuthProvider";
import { useDispatch } from "react-redux";
import { fetchCart } from "../src/features/CartSlice";

const Login = () => {
    const [comment, setComment] = useState("");
    const [user, setUser] = useState(null);
    const [username, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const {login} = useAuthentication(); 
    const navigation = useNavigate();
    const dispatch = useDispatch();


    async function handleLogin() {
        const data = qs.stringify({ username: username, hash_password: password });
        try {
            const response = await axios.post("http://127.0.0.1:3000/api/users/login", data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            if (response.data) {
                const userId = JSON.stringify(response.data.user._id);
                const token = JSON.stringify(response.data.accessToken);
                
                if(token){
                    login(token,userId);
                    const user = localStorage.getItem("userId");
                    dispatch(fetchCart(user));
                    navigation('/home');
                }
                 
               
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <main>
                <section className="login container">
                    <h1>Baki</h1>
                    <input type="text" name="username" id="username" placeholder="Enter your username..." onChange={(ev) => setUserName(ev.target.value)}></input>
                    <input type="password" name="password" id="password" placeholder="Enter your password..." onChange={(ev) => setPassword(ev.target.value)}></input>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={handleLogin}>Login</button>
                        <button onClick={() => navigation('/register')}>Register</button>
                    </div>
                </section>

            </main>
        </>
    )



}
export default Login;