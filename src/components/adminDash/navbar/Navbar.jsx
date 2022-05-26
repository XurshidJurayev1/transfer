import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';
import { connect } from 'react-redux';
import { logout } from '../../../action';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(DarkModeContext);
  const [nav, setNav] = useState(false);


  const func = () => {
    navigate('/');
    props.logout();
  };

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
    <div className="navbar" style={sidebar && width > 990 ? { width: 'calc(100% - 200px)' } : { width: '100%' }}>
      <div className="wrapper">
        <div className="flex">
          <div className="items sidebar-btn">
            <div className="item">
              <MenuIcon sx={{ marginLeft: '10px' }} className="icon" onClick={() => dispatch({ type: 'SIDEBAR' })} />
            </div>
          </div>
          <div className="item navbar__seract-close">
            <button className="btn btn-danger" onClick={() => func()}>Logout</button>
          </div>
          <div className="search ">
            <input type="text" placeholder="Search..." />
            <SearchOutlinedIcon />
          </div>
          <div className="items navbar-btn">
            <div className="item" onClick={() => setNav(!nav)}>
              <ListOutlinedIcon className="icon" />
             
            </div>
          </div>
        </div>
        <div className="items nav-menu" style={nav ? { height: '50px' } : { height: '0px' }}>

          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className="item">
            <button className="btn btn-danger" onClick={() => func()}>Logout</button>
          </div>


        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { logout })(Navbar);
