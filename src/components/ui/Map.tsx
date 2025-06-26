import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import type Coordinate from "../model/Coordinate.model";
import { useState } from "react";

const Map = (props: MapPropsInterface) => {

    const [coordinates, setCoordinates] = useState<Coordinate[] | undefined>(props.coordinate);

    return (  
        <>
            <MapContainer 
                center={[-12.050333235664148, -77.03426901250258]} 
                zoom={14} scrollWheelZoom={true} 
                style={{height: "500px"}}>
                    <TileLayer attribution="PeruFlix" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <ClickMap setPoint={coordinate=>{
                        setCoordinates([coordinate]);
                        if(props.selectedLocation){
                            props.selectedLocation(coordinate)
                        }
                    }}/>
                    {coordinates?.map(
                        coordinate =>   <Marker key={coordinate.lat + coordinate.lng} 
                                                position={[coordinate.lat, coordinate.lng]}>
                                                {coordinate.mensaje? <Popup>{coordinate.mensaje}</Popup>: undefined}
                                        </Marker>)
                    }
            </MapContainer>
        </>
    );    
};

interface MapPropsInterface{
    selectedLocation?:(coodinate: Coordinate) => void;
    coordinate?:Coordinate[]
}


function ClickMap(props: ClickMapProps){

    useMapEvent('click',e=>{
        props.setPoint({lat:e.latlng.lat, lng:e.latlng.lng})
    })

    return null
}

interface ClickMapProps{
    setPoint: (coordinate: Coordinate) => void
}


export default Map;