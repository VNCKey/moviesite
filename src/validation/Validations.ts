export function FirstCapitalLetter(){
    return {
        name: 'primera-letra-mayuscula',
        message: 'La primera letra debe ser mayuscula',
        test: (value: string | undefined) =>{
            if(value && value.length > 0){
                const firstLetter = value.substring(0,1)
                return firstLetter === firstLetter.toUpperCase();
            }

            return true;
        }
    }
}

export function dateValidate(){
    return {
        name: 'fecha-no-es-futura',
        message: 'La fecha no puede ser del futuro',
        test:(value:string | undefined)=>{
            if(!value) return true
            const date = new Date(value)
            const dateCurrent = new Date()
            return date <= dateCurrent
        }
    }
}