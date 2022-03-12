import './App.css';
import Navbar from './components/Navbar';
import Addjob from './components/AddJob';
import JobList from './components/JobList';
import UpdateJob from './components/UpdateJob';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import GetJob from './components/GetJob';

function App() {
  return (
  <>
  <BrowserRouter>
    
    <Navbar />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/getjob" element={<GetJob />}></Route>
      <Route path="/joblist" element={<JobList />}></Route>
      <Route path="/addjob" element={<Addjob />}></Route>
      <Route path="/editjob/:id" element={<UpdateJob />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
