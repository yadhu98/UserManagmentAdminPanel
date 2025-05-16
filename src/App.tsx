// import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ProtectedRoutes } from './components/ProtectedRoute'
import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
import { useDispatch } from 'react-redux'
import { logout } from './store/authSlice'

// import { fetchUsers } from './services/apiService'

const DashBoardPage = lazy(() => import('./pages/DashBoardPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const UsersPage = lazy(() => import('./pages/UserPage'))
const SettingsPage = lazy(()=> import('./pages/SettingsPage'))

function App() {
  // const [users,setUsers]= useState([])
  // useEffect(()=>{
  //   fetchUsers().then(setUsers)    
  // },[])
  // console.log(users)
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  return (
    <BrowserRouter>

      {
        isAuthenticated &&
        <nav className='navbar'>
          <div className='navbar-menu'>
            <div style={{display :'flex', alignItems :'center', gap : '30px'}}>
              <Link to="/dashboard" style={{ marginRight: 8 }}>Dashboard</Link>
              <Link to="/users" style={{ marginRight: 8 }}>Users</Link>
              <Link to="/settings"style={{ marginRight: 8 }}>Settings</Link>
            </div>
            <button className="buttonLogout" onClick={() => dispatch(logout())}>Logout</button>
          </div>
        </nav>

      }

      <Suspense fallback={<div>Loading</div>} >
        <Routes>
        <Route path="/" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          } />
          <Route path='/login' element={
            <LoginPage />} />
          <Route path='/dashboard' element={
            <ProtectedRoutes>
              <DashBoardPage />
            </ProtectedRoutes>} />
          <Route path='/users' element={
            <ProtectedRoutes>
              <UsersPage />
            </ProtectedRoutes>
          } />
          <Route path='/settings' element={
            <ProtectedRoutes>
              <SettingsPage />
            </ProtectedRoutes>
          } />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
