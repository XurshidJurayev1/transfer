import './sidebar.scss';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import { Link } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';

const Sidebar = () => {
  const { dispatch, sidebar } = useContext(DarkModeContext);

  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
      func();
    };
    window.addEventListener('resize', handleWidth);

    return () => {
      window.addEventListener('resize', handleWidth);

    };
  }, []);


  const func = () => {
    if (width > 990) {
      return null;
    } else {
      return dispatch({ type: 'CLOSE_SIDE' });
    }
  };


  const active = {
    transform: 'translateX(0px)',
  };

  const unactive = {
    transform: 'translateX(-200px)',
  };


  return (
    <div className="sidebar" style={sidebar ? active : unactive}>
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">AsiaPay</span>
        </Link>
        <div className="close-btn">
          <CloseIcon className="icon" onClick={() => dispatch({ type: 'CLOSE_SIDE' })} />
        </div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <Link to="/admin/transfer">
            <li>
              <CreditCardIcon className="icon" />
              <span>Transfers</span>
            </li>
          </Link>


        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        />
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        />
      </div>
    </div>
  );
};

export default Sidebar;
