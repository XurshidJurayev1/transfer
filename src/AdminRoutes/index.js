import React, { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MaterialUIPickers from '../components/adminDash/main/Transfer/datatable/date';
import { connect } from 'react-redux';


const AdminOutlet = lazy(() => import('../components/adminDash/AdminOutlet'));
const AdminIndex = lazy(() => import('../components/adminDash/AdminIndex'));
const TransferList = lazy(() => import('../components/adminDash/main/Transfer/List'));
const Login = lazy(() => import('../pages/Login'));
const ApiMain = lazy(() => import('../components/adminDash/apiPages/ApiMain'));
const Info = lazy(() => import('../components/adminDash/info/Info'));

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
    <Route path="/asdas" element={<MaterialUIPickers />} />

    <Route path="/" exact>
      <Route index element={<h1>Home Page</h1>} />
      <Route path="/*" element={<Login />} />

    </Route>

    <Route path="*" element={<h1>Page Not Found Status Code-404</h1>} />


  </Routes>);
};

const mapStateToProps = (state) => {
  return {
    role: state.role, token: state.token,
  };
};

export default connect(mapStateToProps, {})(Index);