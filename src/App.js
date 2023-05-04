import { Fragment, useState, useEffect } from 'react';
import React  from 'react';
import Navbar from './Componets/Navbar';
import AlumnosList from './Componets/AlumnosList';
import Form from './Componets/Form';

function App() {
  const [alumno, setAlumno] = useState({
    nombre: '',
    edad: '',
    correo: ''
  })
  
  const [alumnos,setAlumnos] = useState([]);
  const [listUpdated, setListUpdated] = useState(false)

   useEffect(()=>{
    const getAlumnos = () =>{
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setAlumnos(res))
    }
    getAlumnos()
    setListUpdated(false)
   },[listUpdated]); 

  return (
    <Fragment>
      <Navbar brand={'Alumnos'}/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
                <h2 style={{textAlign:'center'}}>lista de Alumnos</h2>
                <AlumnosList alumno={alumno} alumnos={alumnos} setAlumno={setAlumno} setListUpdated={setListUpdated} />  
          </div>
          <div className='col-5'>
                <h2 style={{textAlign:'center'}}>formulario de Alumnos</h2>
                <Form alumno={alumno} setAlumno={setAlumno}/>
                  
          </div>
        </div>
      </div> 
    </Fragment>
    
  );
}

export default App;
