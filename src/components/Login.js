import { login } from "../api/data.js";
import { useHistory } from "react-router-dom";

const Login = () => {

    let history = useHistory();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            alert('Please fill both fields');
        }

        await login(email, password)

        history.push('/');
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onFormSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    );
}

export default Login;