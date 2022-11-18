import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portrait from './Components/Portrait/Portrait';
import Expertises from './Components/Expertises/Expertises';
import ExpertisesReverse from './Components/ExpertisesReverse/ExpertisesReverse';
import Portefolio from './Components/Portefolio/Portefolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <main className='mt-5'>
        <section className='py-5 container'>
          <Portrait />
        </section>
        <section className="py-5 bg-light px-4">
        <div className='container'>
          <Expertises />
          <ExpertisesReverse />
        </div>
        </section>
        <Portefolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
