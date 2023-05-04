import "./app.css"
import HomePage from "./HomePage";
import BlogContent from "./BlogContent";
import QuestionCard from "./QuestionCard"
import SignUp from "./SignUp";
import SignIn from "./SignIn"
import AuthNavbar from "./AuthNavbar";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./Footer";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from "../contexts/AuthContext";
import blog1 from "./blog1.md"
import blog2 from "./blog2.md"
import blog3 from "./blog3.md"

const blog1BgImage = `url('./assets/post-new-driver-mistake.jpeg')`
const blog2BgImage = `url('./assets/post-winter-driving.jpeg')`
const blog3BgImage = `url('./assets/post-fall-driving.jpeg')`

const theme = createTheme({
    typography: {
      fontFamily: ['Jura', 'sans-serif'].join(','),
    },
  });

function App() {
    return(
        
        <AuthProvider>
            <ThemeProvider theme={theme}>

            <BrowserRouter>
                <PrivateRoute component={AuthNavbar} />
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/blog-01' element={<BlogContent blog={blog1} backgroundImage={blog1BgImage}/>} />
                    <Route path='/blog-02' element={<BlogContent blog={blog2} backgroundImage={blog2BgImage}/>} />
                    <Route path='/blog-03' element={<BlogContent blog={blog3} backgroundImage={blog3BgImage}/>} />
                    <Route path='/quiz' element={<QuestionCard/>} exact />
                    <Route path='/signin' element={<SignIn/>} exact />
                    <Route path='/signup' element={<SignUp/>} exact />
                    <Route path='/forgot-password' element={<ForgotPassword/>} exact />
                </Routes>
                <Footer/>
            </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>

    )
}

export default App