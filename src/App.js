import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TopCollections from './components/TopCollections';
import TopTokens from './components/TopTokens';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <TopTokens/>
      <TopCollections/>
    </>
  );
}

export default App;
