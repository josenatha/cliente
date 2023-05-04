import React from "react";

const AlumnosList = ({alumno, alumnos, setAlumno, setListUpdated}) => {
    
    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre, edad, correo} = alumno
    const handleUpdate = id => {
        
        //validación de los datos
        if (nombre === '' || edad === '' || correo === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(alumno)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setAlumno({
            nombre: '',
            edad: '',
            correo: ''
        })

        setListUpdated(true)
    }




    return(
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {alumnos.map(alumnos => (
                    <tr key={alumnos.id}> 
                    <td>{alumnos.id}</td>
                    <td>{alumnos.nombre}</td>
                    <td>{alumnos.edad}</td>
                     <td>{alumnos.correo}</td>
                     <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(alumnos.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(alumnos.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                                           
                ))}
               
            </tbody>
        </table>
    );
}

export default AlumnosList;