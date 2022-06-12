import { useState, useRef } from 'react';
import './login.css';
import { signUp, logIn, logOut } from '../../helpers/firebase';
import { auth } from '../../helpers/firebase';
import { validatePassword } from '../../helpers/functions';
import logo from '../../resources/pitch_logo.png';

const Login = () => {

    const form = useRef();
    const [switchForms, setSwitchForms] = useState(false);
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userPasswordConfirm, setUserPasswordConfirm] = useState();

    function signUpSubmit(e) {
        e.preventDefault();
        if (validatePassword(userPassword, userPasswordConfirm)) {
            alert('a')
            signUp(userEmail, userPassword);
            e.target.reset();
        } else {
            alert('here we go')
        }
    }

    function logInSubmit(e) {
        e.preventDefault();
        logIn(userEmail, userPassword);
        e.target.reset();

    }

    return (
        <div>
            <img className='logo' src={logo} />
            {switchForms ?
                <div className='log_in_form'>
                    <form ref={form} onSubmit={signUpSubmit} id="signup">
                        <label className="label" for="email">מייל:</label>
                        <input className="input" type="email" name="email" onChange={(event) => setUserEmail(event.target.value)} />
                        <label className="label" for="password">סיסמה:</label>
                        <input className="input" type="password" name="password" onChange={(event) => setUserPassword(event.target.value)} />
                        <label className="label" for="password">סיסמה בשנית:</label>
                        <input className="input" type="password" name="password" onChange={(event) => setUserPasswordConfirm(event.target.value)} />
                        <button className="button" type="submit" value="Submit" >הרשם</button>
                    </form>
                    <button className="button" onClick={(e) => setSwitchForms(false)} class="changeToLogIn" >כבר רשום? הכנס</button>
                </div>
                :
                <div className='log_in_form'>
                    <form className="form" ref={form} onSubmit={logInSubmit} id="logIn">
                        <label className="label" for="email">מייל:</label>
                        <input className="input" type="email" name="email" onChange={(event) => setUserEmail(event.target.value)} />

                        <label className="label" for="password">סיסמה:</label>
                        <input className="input" type="password" name="password" onChange={(event) => setUserPassword(event.target.value)} />
                        <button className="button" type="submit" value="Submit"  >התחבר</button>
                    </form>
                    <button className="button" onClick={(e) => setSwitchForms(true)} class="changeToLogIn">אין לך משתמש? לחץ כאן</button>
                </div>
            }

        </div>
    );
}

export default Login;