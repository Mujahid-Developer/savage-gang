import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';

import Navbar from './components/Navbar';

import { UserProvider } from './context/UserContext';
import About from './pages/About';
import Store from './pages/Store';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route path='/about' element={<About/>}/>
            <Route path='/store' element={<Store/>}/>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
