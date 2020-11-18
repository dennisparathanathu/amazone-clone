import React, { useState} from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import { auth } from "./firebase";


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }


    return (
        <div className="login">
            <Link to="/">
                <img
                    className='login__logo'
                    src="https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE1XFxcLzA4XFxcLzA2MTUzOTM0XFxcL2FtYXpvbi5qcGdcIixcIndpZHRoXCI6NzAwLFwiaGVpZ2h0XCI6MzcwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvaGVyXFxcL25vLWltYWdlLnBuZz9pZD0wZDJkNjI3YzA1OWI5ZWRjYWIwZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIwZGZjNWM4M2QwYTdkMmQ3OTc3MjY1NjQzMjFkNjRjYzk5OGYyYzMxIn0=/amazon.jpg"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" className="login__siginInButton" onClick={signIn}>Sigin In</button>
                </form>
                <p>By continuing, you agree to Amazon-clones's Conditions of Use and Privacy Notice.</p>

                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>

            </div>
            
        </div>
    )
}

export default Login
