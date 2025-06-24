import { useParams } from "react-router";

const EditCines = () => {
    const {id} = useParams();

    return (
        <>
            <h3>Editar cines</h3>
            <p>El id del cine a editar es {id}</p>
        </>
    );
};

export default EditCines;