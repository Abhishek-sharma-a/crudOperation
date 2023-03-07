import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Route,Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
import Header from './pages/Header';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';


function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">
        <ToastContainer position='top-center'/>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addContact" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
   

    </div>
  );
}

export default App;
