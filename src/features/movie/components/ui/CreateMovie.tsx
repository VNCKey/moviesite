import type { SubmitHandler } from "react-hook-form";
import FormMovie from "./FormMovie";
import type CreateMovie from "../../models/CreateMovie.model";
import type Gender from "@/features/gender/models/Gender.model";
import type CineModel from "@/features/cines/models/Cine.model";

const CreateMovie = () => {
    
    const onSubmit: SubmitHandler<CreateMovie> = async(data)=>{
        console.log('Creando peliucla....')
        await new Promise(resolve => setTimeout(resolve,500))
        console.log(data)
    }

    const gendersSelected:Gender[] = []
    const gendersNoSelected:Gender[] = [
        {id:1,name:'Accion'},
        {id:2,name:'Drama'},
        {id:3,name:'Comedia'}
    ]

    const selectedCinema: CineModel[] = [];
    const unSelectedCinema: CineModel[] = [
        {
            id:1,
            name: 'Spider',
            latitud:0,
            longitud:0
        },
        {
            id:2,
            name: 'Batman',
            latitud:0,
            longitud:0
        }
    ];

    return (
        <>
            <h3>Crear Pelicula</h3>
            <FormMovie 
                onSubmit={onSubmit} 
                selectedGenders={gendersSelected} 
                noselectedGenders={gendersNoSelected}
                selectedCinemas={selectedCinema}
                unSelectedCinemas={unSelectedCinema}
                >
            </FormMovie>
        </>
    );


};

export default CreateMovie;