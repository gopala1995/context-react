
import './App.css';
// import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Users } from './components/Users';
import { UserDetails } from './components/Userdeatils';
import { Login } from './components/login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/users/:id' element={<UserDetails/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
