import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../Service.js";
import { Redirect } from "react-router";
import StyledForm from "./StyledForm.jsx";


const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    return (

        <StyledForm >
            <p style={{ fontSize: '20px' }}>Login to get full access:</p> <br />
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)

                    console.log(user)
                    if (user) {
                        console.log('uspesno')
                        setUser(user);

                        history.push("/")
                        // <Redirect to="/home"/>

                        console.log(user)
                        // history.push('/quotes')
                    } else {
                        <Redirect to="/register" />
                        console.log('redirect')
                    }
                })

            }}>
                <input type="text" placeholder="enter username/email" onChange={(e) => { setUsername(e.target.value) }} /> <br />
                <input type="password" placeholder="enter password" onChange={(e) => { setPassword(e.target.value) }} /><br />
                <input type="submit" value="LogIn" class="btn" /><br />
            </form>
            <br />
            <div className="drugi">
                <Link style={{ color: 'black', fontSize: '20px' }} to="/register">Not registred?</Link>
            </div>
        </StyledForm>
    );
}





export default Login