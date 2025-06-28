import { useForm, type SubmitHandler } from "react-hook-form";
import type CreateMovie from "../../models/CreateMovie.model";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from 'yup'
import SelectImg from "@/components/ui/SelectImg";
import Button from "@/components/ui/Button";
import { NavLink } from "react-router";
import MultiSelector from "@/components/ui/MultiSelector";
import type Gender from "@/features/gender/models/Gender.model";
import type MultiSelectorModel from "@/components/model/MultiSelector.model";
import { useState } from "react";

const FormMovie = (props:FormMovieProps) => {

    const {register, handleSubmit, setValue, formState:{errors,isValid, isSubmitting}} = useForm<CreateMovie>({
        resolver:yupResolver(validationRules),
        mode:'onChange',
        defaultValues: props.model ?? {title: ''}
    })

    const currentImg:string | undefined = props.model?.poster ? props.model.poster as string : undefined

    const mapear = (array: {id:number, name:string}[]):MultiSelectorModel[] => {
        return array.map(value => {
            return {key:value.id,description:value.name}  
        })
    }

    const [gendersSelected, setGendersSelected] = useState(mapear(props.selectedGenders));
    const [nogendersSelected, setNoGendersSelected] = useState(mapear(props.noselectedGenders));

    const onSubmit:SubmitHandler<CreateMovie>  = (data) =>{
        data.gendersId = gendersSelected.map(value => value.key)
        props.onSubmit(data)
    } 

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <label htmlFor="title">Titulo</label>
                    <input type="text" id="title" autoComplete="off" className="" {...register('title')} />
                    {errors.title && <p className="">{errors.title.message}</p>}
                </div>
                <div className="">
                    <label htmlFor="dateRelease">Fecha Lanzamiento</label>
                    <input type="date" id="dateRelease" autoComplete="off" className="" {...register('dateRelease')} />
                    {errors.dateRelease && <p className="">{errors.dateRelease.message}</p>}
                </div>
                <div className="">
                    <label htmlFor="trailer">Trailler (Youtube)</label>
                    <input type="text" id="trailer" autoComplete="off" className="" {...register('trailer')} />
                </div>
                <SelectImg label="Poster" imgUrl={currentImg}  imgSelected={poster => {
                    setValue('poster',poster);
                }}></SelectImg>


                <div>
                    <label htmlFor="">Generos</label>
                    <MultiSelector 
                        selected={gendersSelected} 
                        noSelected={nogendersSelected} 
                        onChange={(selected,noSelected) => {
                            setGendersSelected(selected)
                            setNoGendersSelected(noSelected)
                        }}></MultiSelector>
                </div>

                <div>
                    <Button type="submit" disable={!isValid || isSubmitting}>{isSubmitting ? 'Enviando...':'Enviar'}</Button>
                    <NavLink to={"/"}>Cancelar</NavLink>
                </div>
            </form>
        </>
    );
};

interface FormMovieProps{
    model?:CreateMovie;
    onSubmit:SubmitHandler<CreateMovie>;
    selectedGenders: Gender[];
    noselectedGenders: Gender[];
}

const validationRules = yup.object({
    title: yup.string().required('El titulo es obligatorio'),
    dateRelease: yup.string().required('La fecha de lanzamiento es obligatoria'),

});


export default FormMovie;