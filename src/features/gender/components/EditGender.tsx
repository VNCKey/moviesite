import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateGender from "../models/CreateGender.model";
import GenderForm from "./GenderForm";
import type { SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";

const EditGender = () => {
    const {id} = useParams();
    const [model,setModel]= useState<CreateGender | undefined>(undefined)


    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setModel({name:'Drama '+id})
        },1000);

        return ()=>clearTimeout(timerId)
    },[id])

    const onSubmit:SubmitHandler<CreateGender> = async (data)=> {
            console.log('Editando el genero')
            await new Promise(resolve => setTimeout(resolve,2000));
            console.log(data)
    }

    return (
        <>
            <div>Editar Genero</div>
            {model ? <GenderForm  model={model} onSubmit={onSubmit}/> : <Loading/>}
        </>
    );
};

export default EditGender;