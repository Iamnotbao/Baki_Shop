import { useState } from "react";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import "../style/Register.scss"

const Register = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();

    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleSubmit() {
        if (username !== '') {
            if (confirmPassword === password) {
                const data = qs.stringify({ username: username, hash_password: password });

                try {
                    const response = await axios.post("http://127.0.0.1:3000/api/users/createUser", data, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        }
                    });

                    console.log(JSON.stringify(response.data));
                    navigation('/');
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log("Password is not the same");
            }
        } else {
            console.log("Type your username");
        }
    }

    return (
        <>
            <main>
                <section className="login container">
                    <h1>Baki</h1>
                    <input type="text" name="username" id="username" placeholder="Enter your username..." value={username} required onChange={(ev) => setUserName(ev.target.value)}></input>

                    <input type="password" name="password" id="password" placeholder="Enter your password..." value={password} required onChange={(ev) => setPassword(ev.target.value)}></input>


                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter your confirmPassword..." required onChange={(ev) => setConfirmPassword(ev.target.value)}></input>

                    <button type="button" className="loginButton" onClick={handleSubmit}>
                        Sign in
                    </button>
                    <button type="button" className="loginButton" onClick={()=> navigation("/")}>
                        Login
                    </button>
                </section>

            </main>
        </>
    );
}

export default Register;
