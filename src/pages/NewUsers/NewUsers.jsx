import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const NewUsers = () => {

    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        axios.get('/api/auth/new-users')
            .then(res => {
                setAllUsers(res.data)
            })
    }, [])

    const updateUser = id => {
        axios.get(`/api/auth/user/${id}`).then(res => {
            console.log(res.data);
            if (res.data.role === 'user') {
                axios.put(`/api/auth/updateStatus/${id}`, { balance: 50 })
                    .then(res => {
                        if(res.status == 200){
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                              }).then(res=>{
                                location.reload()
                              })
                        }
                    })
            } else {
                axios.put(`/api/auth/updateStatus/${id}`, { balance: 100 })
                    .then(res => {
                        console.log(res);
                    })
            }
        })

    }

    return (
        <div className='pt-12'>
            <p>New Users</p>
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
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.isActive}</td>
                                <td><button onClick={() => updateUser(user._id)} className="btn btn-sm btn-success text-white">Active</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewUsers;