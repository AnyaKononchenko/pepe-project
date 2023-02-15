import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';

import { data } from './components/data'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header content="Which Pepe are you today?" />
      <main>
        <Cards content={data}/>
      </main>
      <Footer content="Stay Pepe" />
    </div>
  );
}

export default App;
