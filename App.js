import './Ap.css';
import Login from './login';
import Signup from './Signup';
import Registration from './Registration';
import Form from './layout';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form/>}>
            <Route index element={<Registration/>}/>
            <Route path="/login"element={<Login/>}/>
            <Route path="*" element={<Signup/>}/>
            </Route>
          </Routes>
        </BrowserRouter> 
        </>
    );
} 
export default App;
