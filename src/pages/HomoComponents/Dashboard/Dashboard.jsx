import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

const Dashboard = () => {
    const {authUser} = useContext(AuthContext)
    console.log(authUser);
    return (
        <div className='pt-12'>
            <div className='grid lg:grid-cols-3 justify-evenly gap-4'>
                <div>
                <p className='text-2xl'>Welcome, <span className='font-bold'>{authUser?.name}</span></p>
                <p className='text-sm'>Account Type: <span className='text-blue-400'>{authUser.role}</span> <span className='ml-2'>Account Status: <span className='text-blue-400'>{authUser?.isActive}</span></span></p> 
                </div>
                <div className='shadow-lg py-6'>
                    <p className='text-center'>Last Transaction</p>
                    <p className='text-center text-2xl font-bold text-blue-400'>10,0000.00 /=</p>
                </div>
                <div className='shadow-lg py-6'>
                    <p className='text-center'>Balance</p>
                    <p className='text-center text-2xl font-bold text-blue-400'>{authUser.balance}.00 /=</p>
                </div>
            </div>
            <hr className='my-12 border-2' />
            <div>
                <p className='text-2xl'>Transactions History</p>
                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Dashboard;