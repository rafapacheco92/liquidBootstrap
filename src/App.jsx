import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/landingPage/landingPage';
import Navbar from './components/navbarLogin/Navbar';

function App() {
  return (
    <>
      <div className="containerTotal">
        <div className="containerLanding">
          <Navbar />
          <LandingPage />
        </div>
      </div>
    </>
  );
}

export default App;
