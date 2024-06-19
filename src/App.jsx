import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import UnderGraduate from './components/colleges/UnderGraduate';
import PostGraduate from './components/postgraduate/PostGraduate';
import CoursesPage from './components/courses/ShortCourses';
import CourseDetails from './components/courses/CourseDetail';
import ShortCourses from './components/courses/ShortCourses'
import Internship from './components/internship/Internship';
import IndustrialWorkshops from './components/Industrial/IndustrialWorkshop';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/underGraduate" element={<UnderGraduate />} />
        <Route path="/postGraduate" element={<PostGraduate />} />
        <Route path="/all-courses" element={< ShortCourses type="short" />} />
        <Route path="/long-term-courses" element={<CoursesPage type="long" />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/internship" element={<Internship/>} />
        <Route path='/industrial-workshop' element={<IndustrialWorkshops/>} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
