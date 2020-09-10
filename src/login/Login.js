import React, {useState} from "react";
import {Link, useHistory } from "react-router-dom";
import {auth} from "../firebase.js";
import "./Login.css"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push("./")
        }).catch(error => alert(error.message));
    };

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            if(auth)
            {
                history.push("./");
            }
        }).catch(error => alert(error.message));
    };

    return(
        <div className="login">
            <Link to="./">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/2560px-Amazon.com-Logo.svg.png"
                    alt="Logo not found"
                />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className="login_signInButton" type="submit" onClick={signIn}>Sign in</button>
                </form>

                <p>By creating an account, you agree to Amazon-Clone Conditions of Use and Privacy Notice.</p>

                <button className="login_registerButton" onClick={register}>Create your Amazon-Clone account</button>
            </div>
        </div>
    );
}

export default Login;
