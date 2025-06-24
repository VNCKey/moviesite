import { useForm, type SubmitHandler } from "react-hook-form";
import type CreateGender from "../models/CreateGender.model";
import * as yup from 'yup'
import Button from "@/components/ui/Button";
import { FirstCapitalLetter } from "@/validation/Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router";

const GenderForm = (props: FormGenderProps) => {

    const {
            register, 
            formState:{errors, isValid, isSubmitting},
            handleSubmit} = useForm<CreateGender>({
            resolver:yupResolver(rulesValidation),
            mode:'onChange',
            defaultValues:props.model ?? {name: ''}
    });

    return (
        <>
            <form action="" onSubmit={handleSubmit(props.onSubmit)}>
                <div className="">
                    <label htmlFor="name">Nombre</label>
                    <input autoComplete="off" type="text" className="" {...register('name')}/>
                    {errors.name && <p className="">{errors.name.message}</p>}
                </div>
                <div className="">
                    <Button type="submit" disable={!isValid || isSubmitting}>{isSubmitting ? 'Enviado..' : "Enviar"}</Button>
                    <NavLink  to='/genres' className=''>Cancelar</NavLink>
                </div>
            </form>
        </>
    );
};

export default GenderForm;

interface FormGenderProps{
    model?: CreateGender;
    onSubmit: SubmitHandler<CreateGender>
}

const rulesValidation = yup.object({
    name: yup.string().required("El nombre es obligatorio").test(FirstCapitalLetter())
})