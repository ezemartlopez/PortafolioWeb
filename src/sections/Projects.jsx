import code from "@assets/code.svg";
import link from "@assets/link.svg";
import github from "@assets/github.svg";

function CardProject() {
  const url = "https://fastly.picsum.photos/id/1013/536/354.jpg?hmac=g-noHNvrLjQNz62ByvWlOk-g2K4_LNhFKl8THdi9FU8";

  return (
    <div className="border border-slate-700 rounded-2xl pb-2 lg:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full h-[250px] rounded-2xl">
          <img src={url} alt="Image-project" className="w-full h-full rounded-2xl object-cover" />
        </div>
        <div className="w-full h-[250px] flex flex-col items-center justify-start gap-2">
          <h3 className=" text-white sm:text-2xl text-lg font-bold">SVGL - A beautiful library with SVG logos</h3>
          
          <div className="w-full flex px-2">
            <button className="flex items-center px-3 rounded-full border border-cyan-600 gap-2">
              <i class="devicon-react-original colored"></i>
              <span className="text-white">React JS</span>
            </button>
          </div>

          <p className="text-slate-400 px-1 text-base lg:px-2 font-medium text-center">Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.</p>
          <div className="flex-grow flex items-end gap-2 lg:pb-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-600 border border-gray-600 rounded-2xl">
              <img src={github} alt="logo" className="size-6 text-white"/>
              <span className="text-lg text-white">Code</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-600 border border-gray-600 rounded-2xl">
              <img src={link} alt="logo" className="size-5"/>
              <span className="text-lg text-white">Preview</span>
            </button>
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
        <CardProject/>
        <CardProject/>
      </div>
    </section>
  );
}

export default Projects;
/*
        <div className="p-2 flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 w-full h-[250px] rounded-xl">
            <img src={url} alt="Image_project" className="rounded-xl w-full h-full object-cover"/>
          </div>

          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className=" text-white sm:text-2xl text-xl font-bold">SVGL - A beautiful library with SVG logos</h3>
            <div className="">
              <div className="">
                <button className="flex items-center px-3 rounded-full border border-cyan-600 gap-2">
                  <i class="devicon-react-original colored"></i>
                  <span className="text-white">React JS</span>
                </button>
              </div>
              <p className="text-slate-400 text-base font-medium">Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.</p>
              <div className="">
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 border border-gray-600 rounded-2xl">
                    <img src={github} alt="logo" className="size-6 text-white"/>
                    <span className="text-lg text-white">Code</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 border border-gray-600 rounded-2xl">
                    <img src={link} alt="logo" className="size-5"/>
                    <span className="text-lg text-white">Preview</span>
                </button>
              </div>
            </div>
          </div>
        </div>
*/