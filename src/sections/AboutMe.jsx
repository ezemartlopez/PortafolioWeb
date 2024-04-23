import user from "@assets/user.svg";
import chevronup from "@assets/chevron-up.svg";

function AboutMe() {
  return (
    <section id="SobreMi" className='w-full pt-[80px] px-6'>
      <div className="w-full pb-[50px] flex justify-start items-center gap-4">
        <img src={user} alt="logo" className='size-8'/>
        <h1 className="text-3xl text-white font-bold">Sobre Mi</h1>
      </div>
      <div className="flex gap-12 md:flex-row flex-col-reverse">
        <div className="flex flex-col gap-4">
          <p className="text-white text-lg text-wrap">¡Hola! Me llamo Ezequiel, pero me dicen Eze. Actualmente, estoy estudiando Ingeniería en sistemas de información y me apasiona el mundo del desarrollo web.</p>

          <p className="text-white text-lg text-wrap">Hace tres años, comencé mi emocionante viaje en la programación, y desde entonces, me he sumergido en el <span className="inline-block font-bold text-yellow-400">Desarrollo Frontend</span>, especialmente con la librería líder en el mercado, <span className="text-cyan-500 font-bold">React JS</span>  <i class="devicon-react-original colored"></i>. Sin embargo, mi pasión por la tecnología me ha llevado a ampliar mis horizontes y aspirar a convertirme en un <span className="text-green-500 font-bold">Desarrollador FullStack</span>, especialmente con el potente <span className="text-red-500 font-bold">Java</span> <i class="devicon-java-plain colored inline-block"></i>.</p>

          <p className="text-white text-lg">Soy un eterno aprendiz, siempre en busca de nuevas tecnologías y técnicas que impulsen mi crecimiento como desarrollador. Mi meta es ser una fuerza impulsora en proyectos innovadores del mundo digital, aportando mi creatividad y mi habilidad para resolver problemas de manera eficiente. Estoy seguro de que mi pasión y mi compromiso harán una diferencia significativa en cualquier equipo de desarrollo.</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="z-0 size-[240px] rounded-xl rotate-6 border border-slate-600 p-[10px]">
            <img src="" alt="imagen-prfile" className="w-full h-full rounded-md bg-blue-500"/>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-10 pb-4">
        <a href="#Principal" className="flex gap-2 rounded-xl px-4 py-1 hover:bg-slate-600 cursor-pointer">
          <span className="text-white font-bold">Principal</span>
          <img src={chevronup} alt="chevron-up" className="size-6" />
        </a>
      </div>

    </section>
  )
}

export default AboutMe;