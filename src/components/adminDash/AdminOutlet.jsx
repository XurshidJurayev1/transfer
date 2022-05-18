import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import './AdminOutlet.scss';
import Widget from '../../components/adminDash/widget/Widget';
import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const AdminOutlet = () => {
  const { sidebar } = useContext(DarkModeContext);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWidth);

    return () => {
      window.addEventListener('resize', handleWidth);
    };
  }, []);


  return (
    <div className="admin">
      <Sidebar />
      <div className={sidebar && width > 990 ? 'homeContainer activeDesk' : 'homeContainer'}>
        <Navbar />
        {/*<div className="widgets">*/}
        {/*  <Widget type="user" />*/}
        {/*  <Widget type="order" />*/}
        {/*  <Widget type="earning" />*/}
        {/*  <Widget type="balance" />*/}
        {/*</div>*/}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminOutlet;
