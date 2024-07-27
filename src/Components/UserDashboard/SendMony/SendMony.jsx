import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../Authentication/AuthProvider/AuthProvider';

const SendMoney = () => {
    const { token, user } = useAuth();
    const [formData, setFormData] = useState({
        senderId: '', // Will populate this from the logged-in user context in useEffect
        receiverId: '',
        amount: '',
        pin: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                senderId: user._id // Assuming `user` has an `_id` property
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:5000/sendmoney', formData, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         setMessage(response.data.message);
    //         setError('');
    //     } catch (err) {
    //         console.error('Error:', err.response);
    //         setError(err.response?.data?.error || 'Transaction failed');
    //         setMessage('');
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/sendmoney', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMessage(response.data.message);
            setError('');
        } catch (err) {
            console.error('Error:', err.response);
            setError(err.response?.data?.error || 'Transaction failed');
            setMessage('');
        }
    };

    return (
        <div>
            <div className='text-black'>
                <h2 className='text-2xl font-bold'> ReadyPay Send Money</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-4 items-center p-2'>
                        <label className='text-xl font-medium'>Number</label>
                        <input
                            type="text"
                            name="receiverId"
                            value={formData.receiverId}
                            placeholder='Inpute Recever Number'
                            onChange={handleChange}
                            className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            required
                        />
                    </div>
                    <div className='flex gap-4 items-center p-2'>
                        <label className='text-xl font-medium'>Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder='Inpute Amount'
                            className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            required
                        />
                    </div>
                    <div className='flex gap-4 items-center p-2'>
                        <label className='text-xl font-medium'>PIN </label>
                        <input
                            type="password"
                            name="pin"
                            value={formData.pin}
                            onChange={handleChange}
                            placeholder='Inpute Your PIN'
                            className=" ml-8 block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center  px-4 py-2 mt-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >Send Money</button>
                </form>
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default SendMoney;


