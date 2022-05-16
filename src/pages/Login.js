import React from 'react';
import "./Logon.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="login__form mt-5">
                            <div className="col-md-10 m-auto">
                                <form className="login__formMain p-5">
                                    <h1 className="login__title mb-2">Welcome on board!</h1>
                                    <div className="form-group login__group">
                                        <i className="fa-solid fa-at"></i>
                                        <input placeholder="Enter Email Address..." type="text" className="login__input form-control form-control-user" />
                                    </div>
                                    <div className="form-group login__group">
                                        <i className="fa-solid fa-key"></i>
                                        <input placeholder="Password" type="text" className="login__input form-control form-control-user" />
                                    </div>
                                    <button className="login__btn">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;
