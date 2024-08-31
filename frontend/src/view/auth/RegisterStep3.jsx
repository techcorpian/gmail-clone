import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from '../shared/UIElements/Slider';

const RegisterStep3 = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { firstname, lastname, gender, month, day, year } = location.state || {};

    const handleFinish = () => {
        if (name) {
            console.log('First Name:', firstname);
            console.log('Last Name:', lastname);
            console.log('Gender:', gender);
            console.log('Name:', name);
            navigate('/success');
        }
    };

    return (
        <Slider>
            <div key="step3" className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm p-8 bg-white rounded shadow">
                    <h2 className="text-2xl font-semibold text-center mb-4">Step 3: Enter Name</h2>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                        placeholder="Name"
                    />
                    <button
                        onClick={handleFinish}
                        className="block w-full py-2 px-4 bg-blue-500 text-white rounded"
                    >
                        Finish
                    </button>
                </div>
            </div>
        </Slider>
    );
};

export default RegisterStep3;
