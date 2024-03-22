
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Footer from '../Footeer/Footer';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? <p>loading..</p>:<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Header;