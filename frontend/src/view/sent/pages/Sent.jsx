import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Make sure axios is imported
import Table from '../../shared/components/Table';
import AuthService from '../../../services/auth.service.jsx';

const Sent = () => {
  const currentUser = AuthService.getCurrentUser();
  const userMail = currentUser.email;
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/sent/get/${userMail}`)
      .then(res => {
        setEmails(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);  // Removed `id` from dependencies since it is not defined



  return (
    <div>
      <Table emails={emails} setEmails={setEmails} />
    </div>
  );
};

export default Sent;
