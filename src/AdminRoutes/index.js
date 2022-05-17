import React, { lazy, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MaterialUIPickers from '../components/adminDash/main/Transfer/datatable/date';
import { connect } from 'react-redux';


const AdminOutlet = lazy(() => import('../components/adminDash/AdminOutlet'));
const AdminIndex = lazy(() => import('../components/adminDash/AdminIndex'));
const TransferList = lazy(() => import('../components/adminDash/main/Transfer/List'));
const Login = lazy(() => import('../pages/Login'));
const ApiMain = lazy(() => import('../components/adminDash/apiPages/ApiMain'));
const Info = lazy(() => import('../components/adminDash/PageInformation/PageInfo'));

const Index = (props) => {
  const [admin, setAdmin] = useState(false);


  console.log(props);
  console.log(admin);

  const func = () => {
    if (props.role.length > 0) {
      switch (props.role) {
        case 'admin'  :
          return setAdmin(true);
        default :
          return null;
      }
    }
  };

  useEffect(() => {
    func();


  }, [props.role]);

  return (<Routes>

    {
      admin &&
      <Route path="/admin/*" element={<AdminOutlet />}>
        <Route index element={<AdminIndex />} />
        <Route path="transfer">
          <Route index element={<TransferList />} />
        </Route>
        <Route path="info">
          <Route index element={<Info />} />
        </Route>
        <Route path="apimain">
          <Route index element={<ApiMain />} />
        </Route>
      </Route>
    }

    <Route path="/" exact>
      <Route index element={<Login />} />
      <Route path="*" element={<h1>Page Not Found Status Code-404 <Link to="/">home</Link></h1>} />

    </Route>


  </Routes>);
};

const mapStateToProps = (state) => {
  return {
    role: state.role, token: state.token,
  };
};

export default connect(mapStateToProps, {})(Index);