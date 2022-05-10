import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminOutlet from './components/adminDash/AdminOutlet';
import AdminIndex from './components/adminDash/AdminIndex';
import TransferList from './components/adminDash/main/Transfer/List';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>

          <Route path="/admin/*" element={<AdminOutlet />}>
            <Route index element={<AdminIndex />} />
            <Route path="transfer">
              <Route index element={<TransferList />} />
            </Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
