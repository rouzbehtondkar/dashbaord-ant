
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashbord from "../Pages/Dashbord/Dashbord";
import Inventvory from "../Pages/Inventvory/Inventvory";
import Orders from "../Pages/Orders/Orders";
import Customers from "../Pages/Customers/Customers";
import Logins from '../infrastructure/unauthorized/login/Logins'
import App from '../App';
function RouteAuthorized() {
    return (
<Routes>
    <Route path='/' element={<Dashbord/>}></Route>
    <Route path='/Inventvory' element={<Inventvory/>}></Route>
    <Route path='/Orders' element={<Orders/>}></Route>
    <Route path='/Customers' element={<Customers/>}></Route>
    <Route path='/App' element={<App/>}></Route>

</Routes>
    );
}
export default RouteAuthorized;