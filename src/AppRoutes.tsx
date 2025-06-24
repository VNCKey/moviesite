import { Route, Routes } from "react-router";

import LandingPage from "./features/home/components/LandingPage";

import IndexGenres from "./features/gender/components/IndexGender";
import EditGender from "./features/gender/components/EditGender";

import IndexActors from "./features/actors/components/IndexActor";
import EditActor from "./features/actors/components/EditActor";

import IndexCines from "./features/cines/components/IndexCine";
import CreateCines from "./features/cines/components/CreateCines";
import EditCines from "./features/cines/components/EditCines";
import CreateMovie from "./features/movie/components/ui/CreateMovie";
import EditMovie from "./features/movie/components/ui/EditMovie";
import RouteNotFound from "./components/ui/RouteNotFound";
import CreateGender from "./features/gender/components/CreateGender";
import FilterMovies from "./features/movie/components/ui/FilterMovies";
import CreateActor from "./features/actors/components/CreateActor";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>

            <Route path="/genres" element={<IndexGenres/>}/>
            <Route path="/genres/create" element={<CreateGender/>}/>
            <Route path="/genres/edit/:id" element={<EditGender/>}/>

            <Route path="/actors" element={<IndexActors/>}/>
            <Route path="/actors/create" element={<CreateActor/>}/>
            <Route path="/actors/edit/:id" element={<EditActor/>}/>

            <Route path="/cines" element={<IndexCines/>}/>
            <Route path="/cines/create" element={<CreateCines/>}/>
            <Route path="/cines/edit/:id" element={<EditCines/>}/>

            <Route path="/movies/create" element={<CreateMovie/>}/>
            <Route path="/movies/edit/:id" element={<EditMovie/>}/> 

            <Route path="/movies/filter" element={<FilterMovies/>}/>

            <Route path="*" element= {<RouteNotFound/>} />
        </Routes>
    );
};

export default AppRoutes;