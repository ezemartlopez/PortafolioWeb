
import Mail from "@assets/mail.svg";
import TypingEffect from "@purecomponents/TypingEffect";

function Github() {
  const url = "https://github.com/ezemartlopez";
  return (
    <a href={url} target="_blank" className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 hover:bg-slate-500/50">
      <i className="devicon-github-original text-white text-xl"></i>
      <span className="text-white font-medium font-rubik">Github</span>
    </a>
  );
}
function Linkedin() {
  const url = "https://www.linkedin.com/in/ezequielernestomartinezlopez/";
  return (
    <a href={url} target="_blank" className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 hover:bg-slate-500/50">
      <i className="devicon-linkedin-plain text-white text-xl"></i>
      <span className="text-white font-medium font-rubik">Linkedin</span>
    </a>
  );
}
function Email() {
  const mail = "ezemartlopez@gmail.com";
  return (
    <a href={"mailto:" + mail} target="_blank" className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 hover:bg-slate-500/50">
      <img src={Mail} alt="logo_email" className="size-8 p-1"/>
      <span className="text-white font-medium font-rubik">{mail}</span>
    </a>
  );
}

function Presentation() {
  return (
    <div className="max-w-full w-full flex flex-col items-center lg:items-start gap-y-2">
      <h2 className="text-white text-3xl sm:text-5xl font-rubik font-bold text-wrap">¡Hola Mundo! yo soy</h2>
      <h1 className="bg-gradient-to-r from-blue-800 via-purple-600 to-cyan-500 text-transparent bg-clip-text text-4xl sm:text-5xl lg:text-6xl font-bold font-rubik text-wrap">Ezequiel Martinez</h1>
      <TypingEffect text={"Desarrollador Front-End"} typingSpeed={100} eraseSpeed={50} pauseDuration={2000} />  
    </div>
  );
}

function UbicationWork() {
  return (
      <div className="lg:max-w-max mt-2 flex flex-col items-center lg:items-start gap-y-4">
        <span className="text-white font-rubik">Buenos Aires, Argentina</span>
        <span className="border-2 border-green-400 rounded-full max-w-max px-3 py-1 text-green-400 text-base font-bold hover:bg-green-400 hover:text-white">Open to Work</span>
      </div>
  );
}

function FormsContact() {
    return (
        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Github/>
            <Linkedin/>
            <Email/>
        </div>
    );
}
function Main() {
  return (
    <section id="Principal" className="w-full pt-[100px] px-6 flex flex-col gap-4">
        <Presentation/>
        <UbicationWork/>
        <FormsContact/>
    </section>
  )
}

export default Main;
