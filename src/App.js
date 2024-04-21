import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import Login from './components/auth/login/Login';
import SignUp from './components/auth/signup/SignUp';
import OTP from './OTP';
import AddProduct from './components/addproduct/AddProduct';
import Try from './others/Try';
import RegisterForm from './others/Register';
import AdminComponent from './others/Admin';
import AppII from './others/another';
import CreateProductPage from './others/createproducttest';
import ImageUpload from './others/Imageupload';
import Company_Home from './company/Company_Home';
import Demo from './company/auth/Demo';
import Setup from './company/setup/Setup';
import OptionsArea from './company/dashboard/OptionsArea'

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path='/otp' element={<OTP />} />
        <Route path='/' element={<SignUp />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/try' element={<Try />} />
        <Route path='/try2' element={<RegisterForm/>} />
        <Route path='/admin' element={<AdminComponent/>} />
        <Route path='/another' element={<AppII/>} />
        <Route path='/product' element={<CreateProductPage />}/>
        <Route path='/image' element={<ImageUpload />}/>
        <Route path='/company' element={<Company_Home />}/>
        <Route path='/company/demo' element={<Demo />}/>
        <Route path='/company/setup' element={<Setup />}/>
        <Route path='/company/dashboard' element={<OptionsArea />}/>
        {/* Default route for undefined routes */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default App;