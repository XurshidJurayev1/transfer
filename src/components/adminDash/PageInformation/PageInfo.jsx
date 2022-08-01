import React, { useEffect } from 'react';
import './info.scss';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import DataTable from 'react-data-table-component';
import { columns, customStyles, data } from './Data';
import { getUserInfo } from '../../../action';

const PageInfo = (props) => {
  const token = localStorage.getItem('token');

  const user = props.user || localStorage.getItem('userInfo');

  Number.prototype.toDivide = function () {
    var int = String(this);
    if (int.length <= 3) return int;
    var space = 0;
    var number = '';

    for (var i = int.length - 1; i >= 0; i--) {
      if (space == 3) {
        number = ' ' + number;
        space = 0;
      }
      number = int.charAt(i) + number;
      space++;
    }

    return number;
  };
  useEffect(() => {
    props.getUserInfo({ token });
  }, []);

  if (props.user) {
    localStorage.setItem('userInfo', JSON.stringify(props.user));
  } else {
    props.getUserInfo(localStorage.getItem('token'));
  }


  return (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="" content="cabinet info uzspay" />
      <title>Cabinet | Info</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>

    {
      props.user.data ? <>
        <div className="col-md-12">
          <h1 className="aler alert-warning text-warning text-center">info</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="table__list">
                <div className="table__left">
                  <ul className="list-group list-group-light">
                    <li className="list-group-item"><span className="table__span">ACC ID:</span> <span
                      className="table__span2">{user.data.user.id && user.data.user.id}</span></li>
                    <li className="list-group-item"><span className="table__span">ACC BALANCE:</span> <span
                      className="table__span2">{Number(user.data.user.balance && user.data.user.balance).toDivide()}
                      <b>uzs</b></span></li>
                    <li className="list-group-item"><span className="table__span">ACC ALLOWED IP:</span> <span
                      className="table__span2">user.acc_ip</span></li>
                    <li className="list-group-item"><span className="table__span">API KEY:</span> <span
                      className="table__span2">{user.data.user.secret_w && user.data.user.secret_w}</span></li>
                  </ul>
                </div>
                {/* <div className="table__right">
                <ul className="list-group list-group-light">
                  <li className="list-group-item px-3"> {user.acc_id}</li>
                  <hr />
                  <li className="list-group-item px-3">{Number(user.acc_ball).toDivide()} <b>uzs</b></li>
                  <hr />
                  <li className="list-group-item px-3">{user.acc_ip}</li>
                  <hr />
                  <li className="list-group-item px-3">{user.api_key}</li>
                </ul>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </> : <>
        <h1>Loading</h1>
      </>
    }
  </div>);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { getUserInfo })(PageInfo);
