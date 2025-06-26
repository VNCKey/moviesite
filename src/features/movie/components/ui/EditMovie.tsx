import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateMovie from "../../models/CreateMovie.model";
import FormMovie from "./FormMovie";
import type { SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";

const EditMovie = () => {
    
    const [model, setModel] = useState<CreateMovie | undefined>(undefined)

    const {id} = useParams();

    const onSubmit: SubmitHandler<CreateMovie> = async(data)=>{
            console.log('Editando peliucla....')
            await new Promise(resolve => setTimeout(resolve,500))
            console.log(data)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setModel({title:'Avengers' + id, dateRelease:'2020-05-11',trailer:'abc',poster:'https://th.bing.com/th/id/R.d77f5056227b42273b34453a26fd4e19?rik=xgX5BJl%2fTP9Rgw&pid=ImgRaw&r=0'})
        },500)
    },[id])

    return (
        <>
            <h3>Editar Pelicula</h3>
            {model ? <FormMovie model={model} onSubmit={onSubmit} /> : <Loading/>}
        </>
    );
};

export default EditMovie;