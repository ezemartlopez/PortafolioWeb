import './App.css'
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Experiencie from '@sections/Experiencie';
import Projects from '@sections/Projects';
import Main from '@sections/Main';
import ContactMe from '@sections/ContactMe';
import AboutMe from '@sections/AboutMe';


export default function App() {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-slate-900">
      <div className="lg:max-w-[1024px] lg:min-w-[1024px] w-full h-full relative">
        <Navbar/>
        <main className="flex flex-col gap-2">
          <Main/>
          <Experiencie/>
          <Projects/>
          <AboutMe/>
          <ContactMe/>
        </main>
        <Footer/>
      </div>    
    </div>
  );
}