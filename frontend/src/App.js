import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Student from './Student';
import Addstudent from './Addstudent';
import Updatestudent from './Updatestudent';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student/>} />
        <Route path='/create' element={<Addstudent/>} />
        <Route path='/update/:id' element={<Updatestudent/>} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
