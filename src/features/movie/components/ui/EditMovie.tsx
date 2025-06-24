import { useParams } from "react-router";

const EditMovie = () => {

    const {id} = useParams();

    return (
        <>
            <h3>Editar Pelicula</h3>
            <p>El id de la pelicula a editar es {id}</p>
        </>
    );
};

export default EditMovie;