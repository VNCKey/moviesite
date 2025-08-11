import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/Button";
import { NavLink } from "react-router";
import type CreateActorInterface from "../models/CreateActor.model";
import * as yup from 'yup'
import { dateValidate, FirstCapitalLetter } from "@/utils/validation/Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectImg from "@/components/ui/SelectImg";
import MostrarErrores from "@/components/ui/MostrarErrores";

    const FormActor = (props: FormActorProps) => {
    
        const {
            register,
            handleSubmit,
            setValue,
            formState:{errors, isValid,isSubmitting}
        } = useForm<CreateActorInterface>({
            resolver:yupResolver(validationRules) ,
            mode: 'onChange',
            defaultValues:props.model ?? {name: ''}
        })


        const imgUrlCurrent :string| undefined = props.model?.foto ? props.model.foto as string : undefined

        return (
        <>
						<MostrarErrores errores={props.errores}/>
            <form action="" onSubmit={handleSubmit(props.onSubmit)}>
                <div className="">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" autoComplete="off" className="" {...register('name')}/>
                    {errors.name && <p className=""> {errors.name.message} </p>}
                </div>
                <div className="">
                    <label htmlFor="dateOfBirth">Fecha nacimiento</label>
                    <input type="date" id="dateOfBirth" autoComplete="off" className="" {...register('dateOfBirth')}/>
                    {errors.dateOfBirth && <p className=""> {errors.dateOfBirth?.message} </p>}
                </div>  
                <SelectImg label="Foto" imgUrl={imgUrlCurrent} imgSelected={foto=>setValue('foto',foto)}/>
                <div className="">
                    <Button type="submit" disable={!isValid|| isSubmitting}>
                        {isSubmitting ? 'Enviando...' :'Enviar'}
                    </Button>
                    <NavLink className='' to={'/actors'}>Cancelar</NavLink>
                </div>  
            </form>
        </>
    );
};

interface FormActorProps{
    model?:CreateActorInterface;
    onSubmit: SubmitHandler<CreateActorInterface>;
		errores: string[]
}

const validationRules = yup.object({
    name: yup.string().required('El nombre es obligatorio').test(FirstCapitalLetter()),
    dateOfBirth: yup.string().required('La fecha de nacimiento es obligatoria').test(dateValidate())
})

export default FormActor;