import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
