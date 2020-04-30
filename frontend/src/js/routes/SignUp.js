import React, {useCallback} from "react";
import db from "../base";
//import "../App.css";

const SignUp = ({history}) => {
    const redirectLogin = () => {
        history.push("/")
    }

    const handleSignUp = (event) => {

        event.preventDefault();
        const { email, password } = event.target.elements;

        try{
            db
                .auth()
                .createUserWithEmailAndPassword(email.value,
                    password.value);
            history.push("/");
        } catch(error){
            alert(error);
        }
    }

    return (
        <div className="centered">

                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email"/>
                    </label>
                    <label>
                        Email
                        <input name="password" type="password" placeholder="Password"/>
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
                <button onClick={redirectLogin}>Log In</button>

        </div>
    );
}



export default SignUp;