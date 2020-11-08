import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
