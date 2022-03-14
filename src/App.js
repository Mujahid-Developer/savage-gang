import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';

import Navbar from './components/Navbar';

import { UserProvider } from './context/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Home/>
        <Footer/>
      </UserProvider>
    </>
  );
}

export default App;
