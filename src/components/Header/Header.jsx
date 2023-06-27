import { Outlet } from "react-router-dom"
import { NavLink } from 'react-router-dom';
// import { Suspense } from "react"
// import Loader from "components/Loader/Loader"
const Header = () => {
    return (<>
        <header >
            <div className='container'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </div>    
        </header>
            {/* <Suspense fallback={<LoaderContainer><Loader/></LoaderContainer>}> */}
                <Outlet/>
            {/* </Suspense> */}
            
        
        </>
    )
}

export default Header