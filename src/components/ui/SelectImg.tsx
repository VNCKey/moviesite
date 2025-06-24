import { useState, type ChangeEvent } from "react";

const SelectImg = (props: SelectImgProps) => {

    const [imgBase64, setImgBase64] = useState('')
    const [imgUrl, setImgUrl] = useState(props.imgUrl ? props.imgUrl : '')

    const handleOnchage = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.files){
            const file = e.currentTarget.files[0];
            aBase64(file).then(value => setImgBase64(value)).catch(error => console.log(error))
            props.imgSelected(file)
            setImgUrl('')
        }
    }   

    const aBase64 = (file:File)=>{
        return new Promise<string>((resolve,reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload=()=>resolve(reader.result as string)
            reader.onerror = (error) => reject(error)
        })
    }

    return (
        <div className="">
            <label htmlFor="">{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={handleOnchage}/>
            </div>
            {imgBase64 ? <div>
                <div>
                    <img src={imgBase64} alt="Imagen Seleccionada" />
                </div>
            </div>: undefined}
            {imgUrl ? <div>
                <div>
                    <img src={imgUrl} alt="Imagen del Actor" />
                </div>
            </div>: undefined}
        </div>
    );
};

export default SelectImg;


interface SelectImgProps{
    label:string;
    imgUrl?:string;
    imgSelected:(file:File) => void
}