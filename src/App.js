import Navbar from "./components/navbar/Navbar";
import './app.css';
import Agence from "./pages/agence/Agence";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="app">
     <Navbar/>
     <Agence/>
     <Footer/>
    </div>
  );
}

export default App;
