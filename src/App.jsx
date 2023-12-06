import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/registar/register'
import Home from './components/registar/Home'
import Login from './components/registar/Login'
import About from './components/registar/About'


function App() {

      const isLoggedIn = localStorage.getItem('email') && localStorage.getItem('password')

      console.log(isLoggedIn);

  return (
    <>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/register' element={<Register/>}/>
        <Route  path='/login' element={<Login/>}/>
        {isLoggedIn ? <Route path='/about' element={<About/>}/> : <Route path='/about' element={<Navigate to='/register' />} /> }
      </Routes>
        
    </>
  )
}

export default App
