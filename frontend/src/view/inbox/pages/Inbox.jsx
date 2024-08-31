import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Make sure axios is imported
import Table from '../../shared/components/Table';

const Inbox = () => {
  // Array of objects containing checkbox state and data
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/inbox/get')
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

export default Inbox;
