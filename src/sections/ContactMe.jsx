import inbox from "@assets/inbox.svg";

function ContactMe() {
  return (
  <section id="Contacto" className='w-full mt-[80px] px-6'>
    <div className="w-full my-4 flex justify-start items-center gap-4">
      <img src={inbox} alt="logo" className='size-8'/>
      <h1 className="text-3xl text-white font-bold">Contacto</h1>
    </div>
    <div className="py-10 flex justify-center">
        <form className="flex flex-col gap-6 w-full sm:w-[640px] sm:px-[40px]">
            <input type="email" placeholder="Correo" className="p-2 rounded-md"/>
            <input type="text" placeholder="Asunto" className="p-2 rounded-md"/>
            <textarea rows="5" placeholder="Mensaje" className="p-2 rounded-md"></textarea>
            <input type="submit" value="Enviar" className="cursor-pointer text-white font-bold bg-purple-600 p-2 rounded-md hover:bg-purple-800 transition-background duration-300"/>
        </form>        
    </div>
  </section>
  )
}

export default ContactMe