import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaUsers, FaBook} from 'react-icons/fa'
 import './Dashboard.css'
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart()
  const isAdmin = true;
    return (
        <div className="drawer  drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
            <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#d1a054] ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 text-base-content">
            {
              isAdmin?<>
              <li><NavLink to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'><FaUtensils></FaUtensils> Add Items</NavLink></li>
            <li><NavLink to='/dashboard/reservation'><FaBook></FaBook>Manage Booking</NavLink></li>
            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users</NavLink></li>
            
              </>:<>
              <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
            <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>
              </>
            }
            
            <div className='divider'></div>
            <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li> <NavLink to="/order/salad">Order Food</NavLink> </li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;