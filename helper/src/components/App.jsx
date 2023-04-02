import "./app.css"
import HomePage from "./HomePage";
import Navbar from "./Navbar"
import QuestionCard from "./QuestionCard"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Footer";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      fontFamily: ['Jura', 'sans-serif'].join(','),
    },
  });

function App() {
    return(
        <ThemeProvider theme={theme}>

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/quiz' element={<QuestionCard/>} exact />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </ThemeProvider>

        
    )
}

export default App