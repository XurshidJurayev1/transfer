import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MaterialUIPickers from '../components/adminDash/main/Transfer/datatable/date';


// import AdminOutlet from '../components/adminDash/AdminOutlet';
// import AdminIndex from '../components/adminDash/AdminIndex';
// import TransferList from '../components/adminDash/main/Transfer/List';


const AdminOutlet = lazy(() => import('../components/adminDash/AdminOutlet'));
const AdminIndex = lazy(() => import('../components/adminDash/AdminIndex'));
const TransferList = lazy(() => import('../components/adminDash/main/Transfer/List'));

const Index = () => {
  return (
    <Routes>

      <Route path="/admin/*" element={<AdminOutlet />}>
        <Route index element={<AdminIndex />} />
        <Route path="transfer">
          <Route index element={<TransferList />} />
        </Route>
      </Route>
      <Route path="/asdas" element={<MaterialUIPickers />} />


    </Routes>
  );
};

export default Index;