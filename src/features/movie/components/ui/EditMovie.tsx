import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type CreateMovie from "../../models/CreateMovie.model";
import FormMovie from "./FormMovie";
import type { SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";
import type Gender from "@/features/gender/models/Gender.model";
import type CineModel from "@/features/cines/models/Cine.model";

const EditMovie = () => {
    const {id} = useParams();
    
    
    useEffect(()=>{
        setTimeout(()=>{
            setModel({title:'Avengers' + id, dateRelease:'2020-05-11',trailer:'abc',poster:'https://th.bing.com/th/id/R.d77f5056227b42273b34453a26fd4e19?rik=xgX5BJl%2fTP9Rgw&pid=ImgRaw&r=0'})
        },500)
    },[id])

    const [model, setModel] = useState<CreateMovie | undefined>(undefined)


    const onSubmit: SubmitHandler<CreateMovie> = async(data)=>{
            console.log('Editando peliucla....')
            await new Promise(resolve => setTimeout(resolve,500))
            console.log(data)
    }

    const gendersSelected:Gender[] = [
        {id:2,name:'Drama'},
    ]
    const gendersNoSelected:Gender[] = [
        {id:1,name:'Accion'},
        {id:3,name:'Comedia'}
    ]

    const selectedCinema: CineModel[] = [
        {
            id:1,
            name: 'Spider',
            latitud:0,
            longitud:0
        },
    ];
    const unSelectedCinema: CineModel[] = [
        {
            id:2,
            name: 'Batman',
            latitud:0,
            longitud:0
        }
    ];


    return (
        <>
            <h3>Editar Pelicula</h3>
            {model ? 
                <FormMovie 
                    model={model} 
                    onSubmit={onSubmit} 
                    noselectedGenders={gendersNoSelected} 
                    selectedGenders={gendersSelected}
                    selectedCinemas={selectedCinema}
                    unSelectedCinemas={unSelectedCinema}
                /> : <Loading/>}
        </>
    );
};

export default EditMovie;