// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/Qualification/Qualification';
import Workz from './components/Workz/Workz';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';

import useLocalStorage from 'use-local-storage'

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (


<div className="app" data-theme={theme}>
     <Header/ >
     <main className='main'> 
     
     <Home/>
     <About/>
     <Skills/>
     <Services/>
     <Qualification/>
     <Workz/>

     <Testimonials/>
     <Contact/>
    
 
     
     </main>


     </div>
  );
}

export default App;
