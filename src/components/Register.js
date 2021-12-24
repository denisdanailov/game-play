import { register } from "../api/data.js";
import { useHistory } from "react-router-dom";

const Register = () => {

    let history = useHistory();

    async function onFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('confirm-password');

        if (email == '' || password == '' || rePass == '') {
            return alert('Please fill both fields');
        }

        if (password != rePass) {
            return alert('Passwords don\'t matchs!');
        }

        await register(email, password);

        history.push('/');
    }

    return (
        <section id="register-page" className="content auth">
            <form onSubmit={onFormSubmit} id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    );
}

export default Register;