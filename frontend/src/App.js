import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <ToastContainer
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
      />
    </div>
  );
}

export default App;