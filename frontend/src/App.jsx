import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideDrawer from './view/shared/UIElements/SideDrawer';
import TopMenu from './view/shared/UIElements/TopMenu';
import RightMenu from './view/shared/UIElements/RightMenu';
import Starred from './view/starred/pages/Starred';
import { DrawerProvider } from './view/context/DrawerContext';
import Inbox from './view/inbox/pages/Inbox'; // Import the Inbox component
import './App.css';

function App() {
  return (
    <Router>
      <DrawerProvider>
        <div className='h-screen flex flex-col'>
          <TopMenu />
          <div className="flex flex-grow">
            <SideDrawer />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Inbox />} /> 
                <Route path="/starred" element={<Starred />} />
              </Routes>
            </div>
            <RightMenu />
          </div>
        </div>
      </DrawerProvider>
    </Router>
  );
}

export default App;
