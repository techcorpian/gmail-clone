import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ViewLayout from '../../shared/components/ViewLayout';

const InboxView = () => {
    const { id } = useParams();
    const [emailView, setEmailView] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/inbox/view/${id}`)
            .then(res => {
                setEmailView(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [id]); // Ensure the effect runs when 'id' changes

    return (


        <ViewLayout emailView={emailView}/>
    );
}

export default InboxView;
