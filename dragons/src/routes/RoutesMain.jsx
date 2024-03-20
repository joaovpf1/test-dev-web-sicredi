import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { CreatePage } from '../components/CreatePage';
import { DetailPage } from '../components/DetailPage';



export const RoutesMain = () => {

    return (
        
         <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/create' element={<CreatePage/>}/>
            <Route path='/detail' element={<DetailPage/>}/>
        </Routes>

    )
}