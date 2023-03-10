import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Error404 from './Components/Error404';
import Places from './Components/Places';
import ShowPlace from './Components/ShowPlace';
import Edit_form from './Components/edit';

import New_form from './Components/new';




function App() {
  let [data, setData] = useState({})
  let [link, setLink] = useState('')

  useEffect(() => {
    const fetchData = async () => {
        const API_URL = 'http://localhost:8080/places'
        const url = API_URL + link
        const response = await fetch(url)
        const resData = await response.json()
        setData(resData)
    }
      fetchData()
  },[link])

  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main style= {{marginTop: '75px', marginBottom: '75px' }}>
          
          <h1 className='bg-white p-2 shadow rounded text-center '>Restaurant Review App</h1> 
          <Routes>
            <Route exact path='/' element={<Home />} /> 
            <Route path='/places' element={<Places setLink={setLink} data={data} />} />

            <Route path='/places/new' element={<New_form />} />
            <Route path='/places/:id' element={<ShowPlace setLink={setLink} data={data} />} />
            <Route path='/places/:id/edit' element={<Edit_form setLink={setLink} data={data} />} />

            <Route path='*' element={<Error404 />} />
          </Routes>
        </main>
      </Router>

    </div>
  );
}

export default App;
