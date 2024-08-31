// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './view/shared/UIElements/MainLayout';
import Home from './view/Home';
import { DrawerProvider } from './view/context/DrawerContext';
import NotFoundPage from './view/shared/pages/NotFoundPage';
import ProtectedRoute from './view/auth/ProtectedRoute';
import Login from './view/auth/Login';
import Register from './view/auth/Register';
import Inbox from './view/inbox/pages/Inbox';
import Starred from './view/starred/pages/Starred';

import RegisterStep1 from './view/auth/RegisterStep1';
import RegisterStep2 from './view/auth/RegisterStep2';
import RegisterStep3 from './view/auth/RegisterStep3';
import RegisterSuccess from './view/auth/RegisterSuccess';
import './App.css';

function App() {
  return (
    <Router>
      <DrawerProvider>
        <Routes>
          {/* Main layout routes */}
          <Route path="login" element={<Login />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="/register" element={<RegisterStep1 />} />
          <Route path="/step2" element={<RegisterStep2 />} />
          <Route path="/step3" element={<RegisterStep3 />} />
          <Route path="/success" element={<RegisterSuccess />} /> {/* Optional Success Page */}

          {/* Sub-layout for protected routes */}
          <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route index element={<Inbox />} />  {/* Default to Inbox */}
            <Route path="starred" element={<Starred />} />
          </Route>

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </DrawerProvider>
    </Router>
  );
}

export default App;
