import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from '../profile/Login'
import Signup from '../profile/SignUp'

function Routing(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/signup"} element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;