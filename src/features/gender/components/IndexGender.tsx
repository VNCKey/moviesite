import Button from "@/components/ui/Button";
import { useNavigate } from "react-router";

const IndexGender = () => {

    const navigate = useNavigate();

    return (
        <>
            <h3>Géneros</h3>
            <Button onclick={()=> navigate('/genres/create')} >Crear Genero</Button>
        </>
    );
};

export default IndexGender;