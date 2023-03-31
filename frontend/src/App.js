// import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      {/* <AllRoutes /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
