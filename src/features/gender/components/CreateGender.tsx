import { type SubmitHandler } from "react-hook-form";
import GenderForm from "./GenderForm";
import type CreateGenderModel from "../models/CreateGender.model";

const CreateGender = () => {

    

    const onSubmit:SubmitHandler<CreateGenderModel> = async (data)=> {
        console.log('Creando el genero')
        await new Promise(resolve => setTimeout(resolve,2000));
        console.log(data)
    }

    return (
        <>
            <h3>Crear Genero</h3>
            <GenderForm onSubmit={onSubmit}/>
        </>
    );
};

export default CreateGender;        


