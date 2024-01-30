import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className='bg-blue-950 h-screen text-white flex flex-col '>
        <nav className='flex gap-4 items-center justify-start bg-white'>
          <img src='./logo.jpg' alt='React Logo' className='w-32' />
          <ul className='flex flex-row gap-14 text-black'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'text-gray-500' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'text-gray-500' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/profile'
                className={({ isActive }) => (isActive ? 'text-gray-500' : '')}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='h-full flex justify-center items-center text-8xl'>
          <Routes>
            <Route path='/' element={<h1>Home Page</h1>} />
            <Route path='about' element={<h1>About Page</h1>} />
            <Route path='profile' element={<h1>Profile Page</h1>} />
            <Route path='/*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
