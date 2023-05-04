import React from 'react';

const Form = ({alumno, setAlumno}) => {

    const handleChange = e => {
        setAlumno({
            ...alumno,
            [e.target.name]: e.target.value
        })
    }

    let{nombre, edad, correo} = alumno

    const handleSubmit = () => {
        //validación de los datos
        if (nombre === '' || edad === '' || correo === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(alumno)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setAlumno({
            nombre: '',
            edad: '',
            correo: ''
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input value={edad} name="edad" onChange={handleChange} type="text" id="edad" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input value={correo}  name="correo" onChange={handleChange} type="text" id="correo" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form;