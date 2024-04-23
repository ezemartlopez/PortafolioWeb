import code from "@assets/codeLogo.svg";
import menu from "@assets/menu.svg";
import cv from "@files/CV_Frontend_MLE.pdf";

import { useState, useEffect } from "react";

function BlockIf({children, condition}) {
    return condition? children: null;
}

function LinkNavbar({children,id}) {
    return (<li><a href={"#" + id} className="text-white font-rubik hover:text-slate-300 text-lg font-semibold cursor-pointer">{children}</a></li>)
}

function Download() {
  return (
    <a href={cv} download="cv_Martinez_Lopez_Ezequiel.pdf" className="h-8 cursor-pointer font-rubik rounded-md px-4 bg-blue-500 hover:bg-blue-800 transition-background duration-300 text-white flex items-center font-semibold">Download CV</a>
  );
}

function Links(){
  return (
    <>
      <LinkNavbar id="Principal">Principal</LinkNavbar>
      <LinkNavbar id="Experiencia">Experiencia</LinkNavbar>
      <LinkNavbar id="Proyectos">Proyectos</LinkNavbar>
      <LinkNavbar id="SobreMi">Sobre Mi</LinkNavbar>
      {/*<LinkNavbar id="Contacto">Contacto</LinkNavbar>*/}
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const OpenLinks = () =>{  setIsOpen(!isOpen); }

  const breakLinks = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para manejar el evento de cambio de tamaño de pantalla
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Agregar el listener del evento de cambio de tamaño de pantalla
    window.addEventListener('resize', handleResize);

    // Eliminar el listener del evento de cambio de tamaño de pantalla al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Se pasa un array vacío como segundo argumento para que el efecto solo se ejecute una vez al montar el componente

  return (
    <nav className="sticky top-0 bg-slate-900/50  px-4 z-10">
        <div className="w-full h-[80px] flex justify-between xl:justify-between">
            <div className="h-full flex items-center">
                <div className="cursor-pointer">
                  <a href="#Principal">
                    <img src={code} alt="imagecode" className="size-10"/>
                  </a>    
                </div>
            </div>
            <BlockIf condition={screenWidth > breakLinks}>
              <ul className="flex items-center gap-10">
                <Links/>
              </ul>
            </BlockIf>


            <div className="h-full flex items-center gap-4">
                <Download/>
                <BlockIf condition={screenWidth <= breakLinks}>
                  <div className="cursor-pointer" onClick={OpenLinks}>
                      <img src={menu} alt="menu"  className="size-10"/>
                  </div>  
                </BlockIf>
                
            </div>
        </div>
        <div className="relative">
          <BlockIf condition={isOpen && (screenWidth <= breakLinks)}>
              <div className="absolute z-30 w-full">
                  <div className={`w-full ${isOpen ? 'visible' : 'invisible'} opacity-${isOpen ? '100' : '0'} transition duration-200 ease-in-out transform origin-top-right`}>
                      <ul className="w-full flex flex-col justify-start items-center gap-[25px] py-[15px] bg-slate-900 bg-opacity-80">
                          <Links/>
                      </ul>
                  </div>        
              </div> 
          </BlockIf>          
        </div>

    </nav>
  )
}

export default Navbar