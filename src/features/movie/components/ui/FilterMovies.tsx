import Button from "@/components/ui/Button";
import type Gender from "@/features/gender/models/Gender.model";
import { useForm, type SubmitHandler } from "react-hook-form";


interface FormType{
    title:string;
    genderId: number;
    upcomingRealeases: boolean;
    onCines: boolean;
}


const FilterMovies = () => {

    const InitialValue:FormType = {
        title: '',
        genderId: 0,
        upcomingRealeases:false,
        onCines:false
    }

    const {register,handleSubmit,reset,formState:{isSubmitting}} = useForm<FormType>({
        defaultValues:InitialValue
    });


    const generos:Gender[] = [
        {id:1, name:"Accion"},
        {id:2, name:"Comedia"}
    ]

    const onSubmit:SubmitHandler<FormType> = async (data)=>{
        console.log('Filtrando....')
        await new Promise(resolve => setTimeout(resolve,2000))
        console.log(data)
    }

    return (
        <>
            <h3>Filtro de Peliculas</h3>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="boxFormulario">
                <div>
                    <input type="text"  id="title" placeholder="Titulo de la Pelicula" autoComplete="off" className="" {...register('title')}/>
                </div>
                <div className="">
                    <select className="" {...register('genderId')}>
                        <option value="">--Seleccione un Género--</option>
                        {generos.map(genero => <option key={genero.id} value={genero.id}> {genero.name}</option>)}
                    </select>
                </div>
                <div className="">
                    <div className="">
                        <input type="checkbox" className="" id="upcomingRealeases" {...register('upcomingRealeases')}/>
                        <label htmlFor="upcomingRealeases" >Proximos Estrenos</label>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <input type="checkbox" className="" id="onCines" {...register('onCines')}/>
                        <label htmlFor="onCines" >En Cines</label>
                    </div>
                </div>
                <div className="">
                    <Button disable={isSubmitting} type="submit">{isSubmitting ? 'Filtrando..' : 'Filtrar'}</Button>
                    <Button onclick={()=>reset()} className="enviar un name de className que esta almacenado en model.Button.css">Limpiar</Button> 
                </div>
            </form>
        
        </>
    );
};




export default FilterMovies;

