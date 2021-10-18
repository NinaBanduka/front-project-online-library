import { useState } from "react";
import { useHistory } from "react-router";
import { getAllUsers, postUser } from "../Service.js";
import StyledForm from "./StyledForm.jsx";


const Register = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [inputTxt, setInputTxt] = useState('')
    const [inputPass, setInputPass] = useState('')
    const [inputEmail, setInputEmail] = useState('')


    const history = useHistory()
    const validPassword = (password) => password.length >= 8
        && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))
        && password.split('').some(char => !isNaN(Number(char)))

    return (
        <StyledForm>

            <p style={{ color: 'black', fontSize: '20px' }}>Register for free!</p> <br />
            <form onSubmit={(e) => {
                e.preventDefault()
                if (username.length < 4 && !validPassword(password)) {
                    console.log('Neispravan unos');
                    return
                }
                getAllUsers().then(res => {
                    if (!res.data.some(user => user.username === username || user.email === email)) {
                        postUser(username, email, password).then(res => {
                            setUser(res.data)
                            // history.push('/')
                        })
                    }
                })
                { setInputPass(''); setInputTxt(''); setInputEmail('') }

            }


            }>

                <input value={inputTxt} type="text" placeholder="username" onChange={(e) => { setInputTxt(e.target.value); setUsername(e.target.value) }} /> <br />
                <input value={inputEmail} type="email" placeholder="email" onChange={(e) => { setInputEmail(e.target.value); setEmail(e.target.value) }} /> <br />
                <input value={inputPass} type="password" placeholder="password" onChange={(e) => { setInputPass(e.target.value); setPassword(e.target.value) }} /> <br />
                <input type="submit" value="Register" class="btn" />
            </form>
        </StyledForm>
    );
}

export default Register;

