import user from "@assets/user.svg";

function AboutMe() {
  return (
    <section id="SobreMi" className='w-full pt-[80px] px-6'>
      <div className="w-full my-4 flex justify-start items-center gap-4">
        <img src={user} alt="logo" className='size-8'/>
        <h1 className="text-3xl text-white font-bold">Sobre Mi</h1>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-white text-lg text-wrap">Hola, soy Ezequiel, pero mis amigos me llaman Eze. Actualmente, estoy estudiando Ingeniería en sistemas de información y me apasiona el mundo del desarrollo web.</p>
        <p className="text-white text-lg">Comencé mi viaje en la programación hace tres años, enfocándome en el <span className="inline-block font-bold text-yellow-400">Desarrollo Frontend</span> con la libreria <span className="text-cyan-500 font-bold">React JS</span>  <i class="devicon-react-original colored"></i>, y aunque recientemente he sentido un gran interés en convertirme en un <span className="text-green-500 font-bold">Desarrollador FullStack</span> con <span className="text-red-500 font-bold">Java</span> <i class="devicon-java-plain colored inline-block"></i>  .</p>
        <p className="text-white text-lg"> Soy autodidacta y siempre estoy buscando aprender nuevas tecnologías y técnicas. Mi objetivo es seguir creciendo como desarrollador y contribuir de manera significativa a proyectos innovadores en el mundo digital.</p>
      </div>

    </section>
  )
}

export default AboutMe;