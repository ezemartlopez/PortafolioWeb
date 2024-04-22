import briefcase from "@assets/briefcase.svg";
import { experience } from "@data/experienceData";

function ExperienceItem({data}) {
  return (
    <li className="w-full flex">
      <div className="relative min-w-[35px] max-w-[35px] flex justify-center">
        <span className="mt-4 size-4 block rounded-full bg-yellow-400"></span>
        <svg className="absolute stroke-yellow-400" width="0.5" height="100%"><line x1="5" y1="0" x2="5" y2="100%" stroke="" stroke-width="10" /></svg>
      </div>
      <div className="pb-8 pt-2 flex-grow">
        <div className="w-full md:pr-8 h-auto grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="text-yellow-400 font-bold text-xl">{data.cargo}</h3>
            <h4 className="text-white font-bold text-xl">{data.lugar}</h4>
            <span className="text-slate-400 text-sm font-medium">{data.tiempo}</span>
          </div>
          <div className="px-2 pr-4 text-pretty text-gray-300 md:col-span-3">{data.detalles}</div>
        </div>
      </div>
    </li>   
  );
}
function Experiencie() {

  return (
    <section id="Experiencia" className='w-full px-6'>
      <div className="w-full pt-[80px] my-4 flex justify-start items-center gap-4">
        <img src={briefcase} alt="logo" className='size-8'/>
        <h1 className="text-3xl text-white font-bold">Experiencia</h1>
      </div>

      <ol className="w-full">
        {experience.map((data) => (<ExperienceItem data={data}/>))}      
      </ol>
    </section>
  )
}

export default Experiencie