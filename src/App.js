import './App.css';
import {Navbar} from '../src/components/Navbar/Navbar'
import {Banner} from '../src/components/Banner/Banner'
import {Services} from'../src/components/Services/Services'
import {Clients} from'../src/components/Clients/Clients'
import ContactSection from '../src/components/ContactSection/ContactForm'
import {Footer} from '../src/components/Footer/Footer'
function App() {
  return (
    <div className="App">
            <Navbar />
            <Banner />
            <Services />
            <Clients />
            <ContactSection />
            <Footer />
         </div>
  );
}

export default App;
