import type { SubmitHandler } from "react-hook-form";
import FormActor from "./FormActor";
import type CreateActorInterface from "../models/CreateActor.model";

const onSubmit: SubmitHandler<CreateActorInterface> = async(data)=>{
    console.log('Creando Actor')
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
}

const CreateActor = () => {



    return (
        <>
            <h3>Crear Actores </h3>
            <FormActor onSubmit={onSubmit}/>
        </>
    );
};

export default CreateActor;