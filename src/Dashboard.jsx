import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import User from './User';
import Products from './Products';
function Dashboard(props) {
    function logout(){
        localStorage.clear();
        window.location.href = "/";
    }
    return (
        <>
            <header className="bg-gray-100 p-4 shadow">
              <p>You are logged in as: {localStorage.getItem('auth_token')}</p>
            </header>

            <nav className="bg-white shadow-md">
              <div className="container mx-auto flex items-center justify-between p-4">
                <a className="text-lg font-bold text-gray-800" href="/">Dashboard</a>
                <button className="block md:hidden text-gray-500 focus:outline-none" aria-label="Toggle navigation">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
                <div className="hidden md:flex space-x-4"><a className="text-gray-600 hover:text-gray-800" href="/">Home</a>
                  <a className="text-gray-600 hover:text-gray-800" href="/user">User</a><a className="text-gray-600 hover:text-gray-800" href="/products">Products</a>
                </div>
                <a href="/" onClick={logout} className="hidden md:block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Logout</a></div>
            </nav>
            <section className="mt-8">
              <BrowserRouter>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="user" element={<User />} />
                  <Route path="products" element={<Products />} />
                </Routes>
              </BrowserRouter>
            </section>
            <footer className='container-full mx-auto mt-3 bg-slate-100 p-4'>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                  <h3 className='text-center text-blue-950'>Dashboard</h3>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/user">User</a></li>
                    <li><a href="/products">Products</a></li>
                  </ul>
                </div>
                <div className="">
                  <h3 className='text-center text-blue-950'>Quick links</h3>
                  <ul className="flex space-x-4">
                    <li>
                      <a href="/">
                        <box-icon type="logo" name="facebook" class="w-6 h-6"></box-icon>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <box-icon type="logo" name="twitter" class="w-6 h-6"></box-icon>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <box-icon type="logo" name="instagram" class="w-6 h-6"></box-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className='mt-3' />
              <p className='text-center'><small className='text-slate-950'>&copy; Copyright Design by nhanh kimson.</small></p>
            </footer>
        </>
    );
}

export default Dashboard;