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
          <span className="logo">Dashboard</span>
        </Link>
        <div className="close-btn">
          <CloseIcon className="icon" onClick={() => dispatch({ type: 'CLOSE_SIDE' })} />
        </div>
      </div>
      <hr style={{ margin: '0' }} />
      <div className="center">
        <ul>
          <p className="title">Info Dashboard</p>
          <Link to="/admin/info">
            <li>
              <CreditCardIcon className="icon" />
              <span>info</span>
            </li>
          </Link>
          <Link to="/admin/apimain">
            <li>
              <CreditCardIcon className="icon" />
              <span>api</span>
            </li>
          </Link>
          <Link to="/admin/transfer">
            <li>
              <CreditCardIcon className="icon" />
              <span>report</span>
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
