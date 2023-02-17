import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
      Restaurant App    
          <Routes>
            {/* <Route exact path='/' element={<Home />} />  */}
            {/* <Route path='/places' element={<Places />} /> */}
            {/* <Route path 'places/new' element={<PlacesForm />} /> */}
            {/* <Route path='/places/:id' element={<Show />} /> */}
            {/* <Route path='/places/:id/edit' element={<PlacesForm/>} /> */}
            {/* <Route path='/*' element={<Error404 />} /> */}
          </Routes>

        </main>
      </Router>

    </div>
  );
}

export default App;
