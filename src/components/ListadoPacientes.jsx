import Paciente from "./Paciente";

const ListadoPacientes = () => {
    return ( 
        <div className=" md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
            <p className=" text-lg mt-5 text-center mb-8">Adminstra tus {''} <span className=" font-bold text-indigo-600">Pacientes y citas</span></p>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
        </div>
     );
}
 
export default ListadoPacientes;