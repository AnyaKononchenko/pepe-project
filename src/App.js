import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Gallery from './components/Gallery';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const { width } = useWindowSize();

  return (
    <Router>
      <div className="content">
        <Header changeWidth={width}/>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
