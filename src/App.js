// import logo from './logo.svg';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
// import ContactForm from './components/Email/emailauth';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
      {/* <ContactForm/> */}
      
    </div>
  );
}

export default App;
