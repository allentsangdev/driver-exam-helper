import "./app.css"
import HomePage from "./HomePage";
import Navbar from "./Navbar"
import QuestionCard from "./QuestionCard"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Footer";

function App() {
    return(
        
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/quiz' element={<QuestionCard/>} exact />
            </Routes>
            <Footer/>
        </BrowserRouter>
        
    )
}

export default App