import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateActor from "../models/CreateActor.model";
import FormActor from "./FormActor";
import type { SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";

const EditActor = () => {
    const {id} = useParams();

    const [model, setModel] = useState<CreateActor | undefined>(undefined)

    const onSubmit: SubmitHandler<CreateActor> = async(data)=>{
        console.log('Editando Actor...')
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }
    

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setModel({name:'Ton '+ id, dateOfBirth: '2022-11-23', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tom_Holland_at_KCA_2022.jpg/330px-Tom_Holland_at_KCA_2022.jpg'})
        },1000)

        return ()=>clearTimeout(timerId);
    },[id])

    return (
        <>
            <h3>Editar Actores</h3>
            {model ? <FormActor model={model} onSubmit={onSubmit}/> : <Loading/>}
        </>
    );
};

export default EditActor;