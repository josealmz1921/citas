
const Formulario = () => {
    return ( 
    <div className=" md:w-1/2 lg:w-2/5 p-2">
        <h1 className=" font-black text-3xl text-center">Formulario</h1>
        <p className=" text-lg mt-5 text-center mb-8">Añade pacientes y {''} <span className=" font-bold text-indigo-600">Administralos</span></p>
        <form className=" bg-white shadow-md px-5 py-10 rounded-lg mb-10">
            <div className="mt-5">
                <label className="block uppercase font-bold" htmlFor="mascota">Nombre de tu mascota</label>
                <input id="mascota" className=" border-2 outline-none mt-2 w-full px-2 rounded-md placeholder-gray-600" type='text' placeholder="Nombre de la mascota"/>
            </div>
            <div className="mt-5">
                <label className="block uppercase font-bold" htmlFor="propietario">Nombre del propietario</label>
                <input id="propietario" className=" border-2 outline-none mt-2 w-full px-2 rounded-md placeholder-gray-600" type='text' placeholder="Nombre del propietario"/>
            </div>
            <div className="mt-5">
                <label className="block uppercase font-bold" htmlFor="email">Email</label>
                <input id="email" className=" border-2 outline-none mt-2 w-full px-2 rounded-md placeholder-gray-600" type='email' placeholder="Email propietario"/>
            </div>
            <div className="mt-5">
                <label className="block uppercase font-bold" htmlFor="alta">Fecha de cita</label>
                <input id="alta" className=" border-2 outline-none mt-2 w-full px-2 rounded-md placeholder-gray-600" type='date'/>
            </div>
            <div className="mt-5">
                <label className="block uppercase font-bold" htmlFor="sintomas">Fecha de cita</label>
                <textarea 
                    id='sintomas'
                    placeholder="Describe los sintomas"
                    className=" border-2 w-full p-2 mt-2 resize-none rounded-sm outline-none"
                />
            </div>
            <button 
            type="submit"
            className=" bg-indigo-600 w-full text-white rounded-sm mt-4 py-2 uppercase font-bold
            hover:bg-indigo-700 transition-all
            "
            >Guardar</button>
        </form>
    </div>
    );
}
 
export default Formulario;