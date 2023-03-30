import "./app.css"
import HomePage from "./HomePage";
import Navbar from "./Navbar"
import QuestionCard from "./QuestionCard"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
    return(
        
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/quiz' element={<QuestionCard/>} exact />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App