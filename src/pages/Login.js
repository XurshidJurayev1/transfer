import React, { useEffect, useState } from 'react';
import './Logon.scss';
import { connect } from 'react-redux';
import { login } from '../action';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';


const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  useEffect(() => {


    if (props.role.length > 0) {
      switch (props.role) {
        case 'admin' :
          return navigate('/admin/info');
        default :
          return null;
      }
    }

  }, [props.role]);

  const submit = (e) => {
    e.preventDefault();
    props.login({ email, password });
  };

  console.log(props.loginStatus);


  return (<div className="login">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="login__form mt-5">
            <div className="col-md-10 m-auto">
              <form className="login__formMain p-5" onSubmit={submit}>
                <h1 className="login__title mb-2">Welcome on board!</h1>
                <div className="form-group login__group">
                  <i className="fa-solid fa-at"></i>
                  <input
                    placeholder="Enter Email Address..."
                    type="text"
                    className="login__input form-control form-control-user"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group login__group">
                  <i className="fa-solid fa-key"></i>
                  <input
                    placeholder="Password"
                    type="password"
                    className="login__input form-control form-control-user"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="login__btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>);
};

const mapStateToProps = (state) => {
  return {
    token: state.token, role: state.role, // user: state.user,
    loginStatus: state.login,
  };
};

export default connect(mapStateToProps, { login })(Login);
