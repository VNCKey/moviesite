import Button from "@/components/ui/Button";
import { useNavigate } from "react-router";

const IndexCines = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>Cines</h3>
            <Button onclick={()=> navigate('/cines/create')} >Actores</Button>
        
        </>
    );
};

export default IndexCines;