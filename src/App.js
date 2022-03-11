import './App.css';
import Navbar from './components/Navbar';
import Addjob from './components/Addjob';
import JobList from './components/JobList';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<JobList />}></Route>
      <Route path="/" element={<JobList />}></Route>
      <Route path="/joblist" element={<JobList />}></Route>
      <Route path="/addjob" element={<Addjob />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
