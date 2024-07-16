import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {

    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        axios.get('/api/auth/users')
            .then(res => {
                setAllUsers(res.data.users)
            })
    }, [])

    console.log(allUsers);

    return (
        <div className='pt-12'>
            <p>All Users</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user,index) => <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.isActive}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;