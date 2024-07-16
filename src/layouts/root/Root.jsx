import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

const Root = () => {
    return (
        <div className=''>
            <Sidebar></Sidebar>
            <div className='lg:ml-[350px] md:ml-72 lg:mr-24 md:mr-16'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;