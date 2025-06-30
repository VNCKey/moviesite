import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateCineModule from "../models/CreateCine.module";
import FormCine from "./FormCine";
import type { SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";

const EditCines = () => {
    const {id} = useParams();
    const [model,setModel] = useState<CreateCineModule | undefined>(undefined)

    useEffect(()=>{
        setTimeout(()=>{
            setModel({name:'Cinepolis',latitud:-12.050265428313168,longitud:-77.03417546992063})
        },1000)
    },[id])

    const onSubmit: SubmitHandler<CreateCineModule> = async (data)=>{
        console.log('Editar el cine...') 
        await new Promise(resolve => setTimeout(resolve,500))
        console.log(data)
    }

    return (
        <>
            <h3>Editar cines</h3>
            {model ? <FormCine model={model} onSubmit={onSubmit}></FormCine> : <Loading/>}
        </>
    );
};

export default EditCines;