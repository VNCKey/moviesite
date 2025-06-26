import type { SubmitHandler } from "react-hook-form";
import FormCine from "./FormCine";
import type CreateCineModule from "../models/CreateCine.module";

const CreateCines = () => {
    
    const onSubmit: SubmitHandler<CreateCineModule> = async (data)=>{
        console.log('Creando el cine...') 
        await new Promise(resolve => setTimeout(resolve,500))
        console.log(data)
    }

    return (
        <>
            <h3>Crear Cine</h3>
            <FormCine onSubmit={onSubmit}></FormCine>
        </>
    );          
};

export default CreateCines;