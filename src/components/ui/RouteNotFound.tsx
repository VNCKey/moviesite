import { useEffect } from "react";
import { Navigate, useLocation } from "react-router";

const RouteNotFound = () => {

    const location = useLocation()

    useEffect(()=>{
        console.log(`Ruta no encontrada : ${location.pathname}`)
    },[location])

    return <Navigate to='/'/>
};

export default RouteNotFound;