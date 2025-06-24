import Button from "@/components/ui/Button";
import { useNavigate } from "react-router";

const IndexActors = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>Actores</h3>
            <Button onclick={()=> navigate('/actors/create')} >Crear Actores</Button>
        </>
    );
};

export default IndexActors; 