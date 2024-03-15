import { Route, Routes } from 'react-router-dom';
import { DragonProvider } from '../providers/dragonContext';

import { Home } from '../components/Home';
import { Login } from '../components/Login';



export const RoutesMain = () => {

    return (
        <DragonProvider>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </DragonProvider>
    )
}