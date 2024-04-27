import code from "@assets/code.svg";
import link from "@assets/link.svg";
import github from "@assets/github.svg";
import { projects } from "@data/projects";

function REACT() {
  return (
    <button className="flex items-center px-3 rounded-full border border-cyan-600 gap-2">
      <i className="devicon-react-original colored"></i>
      <span className="text-white">React JS</span>
    </button>
  );
}

function TAILWIND() {
  return (
    <button className="flex items-center px-3 rounded-full border border-blue-500 gap-2">
      <i className="devicon-tailwindcss-original colored"></i>
      <span className="text-white">Tailwind</span>
    </button>
  );
}

function ObtnerTecnologia(tecnologia) {
  if(tecnologia==="REACT"){
    return <REACT/>
  }
  else if(tecnologia==="TAILWIND"){
    return <TAILWIND/>
  }
  else{
    return null;
  }
}

function CardProject({project}) {
  const {titulo, tecnologias, descripcion, url_github, url_preview, url_image} = project;

  return (
    <div className="border border-slate-700 rounded-2xl pb-2 lg:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full h-[300px] lg:h-[300px] rounded-2xl">
          <img src={url_image} alt="Image-project" className="w-full h-full rounded-2xl object-cover" />
        </div>
        <div className="w-full h-[300px] lg:h-[300px] px-3 flex flex-col items-center justify-start gap-2">
          <h3 className=" text-white sm:text-2xl lg:pt-3 text-lg font-bold">{titulo}</h3>
          
          <div className="w-full flex gap-2">
            {tecnologias.map(tecnologia => ObtnerTecnologia(tecnologia))}
          </div>

          <p className="text-slate-400 text-xs sm:text-sm font-medium text-wrap text-ellipsis overflow-hidden">{descripcion}</p>
          <div className="flex-grow flex items-end gap-2 lg:pb-3">
            {url_github && (
            <a href={url_github} target="_blank" className="flex items-center gap-2 px-3 py-1 bg-gray-800 hover:bg-gray-600 border border-gray-600 rounded-2xl">
              <img src={github} alt="logo" className="size-6 text-white"/>
              <span className="text-lg text-white">Code</span>
            </a>
            )}
            {url_preview && (
            <a href={url_preview} target="_blank" className="flex items-center gap-2 px-3 py-1 bg-gray-800 hover:bg-gray-600 border border-gray-600 rounded-2xl">
              <img src={link} alt="logo" className="size-5"/>
              <span className="text-lg text-white">Preview</span>
            </a>  
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="Proyectos" className='w-full pt-[80px] px-6'>
      <div className="w-full mb-10 flex justify-start items-center gap-4">
        <img src={code} alt="logo" className='size-8'/>
        <h1 className="text-3xl text-white font-bold">Proyectos</h1>
      </div>
      <div className="w-full flex flex-col gap-10">
        {projects.map((project, index)=> (<CardProject key={index} project={project}/>))}
      </div>
    </section>
  );
}

export default Projects;