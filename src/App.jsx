import axios from 'axios'
import { useState } from 'react'
import '../styles.css'
function App() {
  const [titulo, setTitulo] = useState('')
  const [director, setDirector] = useState('')
  const [sinopsis, setSinopsis] = useState('')
  const [reparto, setReparto] = useState('')
  const [duracion, setDuracion] = useState('')
  const [genero, setGenero] = useState('')
  const [estreno, setEstreno] = useState('')
  const [trailer, setTrailer] = useState('')
  const [imagen, setImagen] = useState(null)
  const [pelicula, setPelicula] = useState({})
  const [err, setErr] = useState('')

// ... (resto del código) ...

const handleSubmit = (e) => {
  e.preventDefault();
  if (titulo === '' || director === '' || sinopsis === '' || reparto === '' || duracion === '' || genero === '' || estreno === '' || trailer === '' || imagen === null) {
    setErr('Recuerda llenar todos los campos');
    return;
  }
  setErr('');

  const nuevaPelicula = {
    Titulo: titulo,
    Director: director,
    Sinopsis: sinopsis,
    Reparto: reparto,
    Duracion: duracion,
    Genero: genero,
    Estreno: estreno,
    Trailer: trailer,
    Imagen: imagen,
  };

  axios.post('http://localhost:7058/api/Peliculas', { pelicula: nuevaPelicula })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error al insertar la película:', error);
    });
};




  return (
    <div className='w-75 mx-auto bg-light px-5 pt-3 pb-3 rounded'>
      <p className='my-3 display-6'>Formulario para agregar peliculas</p>
      {err? <h5 className='py-2 mx-auto text-center rounded bg-warning text-white'>{err}</h5> : ''}
      <form action="" className='d-flex flex-column'>

        <label htmlFor="@Titulo" className='h4'>Titulo</label>
        <input type="text" value={titulo}  id="@Titulo" onChange={(e)=>{setTitulo(e.target.value)}}/>
    
        <label htmlFor="@Director" className='h4'>Director</label>
        <input type="text" value={director} onChange={(e)=>{setDirector(e.target.value)}} id="@Director" />

        <label htmlFor="@Sinopsis" className='h4'>Sinopsis</label>
        <input type="text"  value={sinopsis} onChange={(e)=>{setSinopsis(e.target.value)}} id="@Sinopsis" />

        <label htmlFor="@Reparto" className='h4'>Reparto</label>
        <input type="text" value={reparto} onChange={(e)=>{setReparto(e.target.value)}} id="@Reparto" />

        <label htmlFor="@Duracion" className='h4'>Duracion</label>
        <input type="text" value={duracion} onChange={(e)=>{setDuracion(e.target.value)}} id="@Duracion" />

        <label htmlFor="@Genero" className='h4'>Genero</label>
        <input type="text" value={genero} onChange={(e)=>{setGenero(e.target.value)}} id="@Genero" />

        <label htmlFor="@Estreno" className='h4'>Estreno</label>
        <input type="text" value={estreno} onChange={(e)=>{setEstreno(e.target.value)}} id="@Estreno" />

        <label htmlFor="@Trailer" className='h4'>Trailer</label>
        <input type="text" value={trailer} onChange={(e)=>{setTrailer(e.target.value)}} id="@Trailer" />

        <label htmlFor="@img" className='h4 my-1'>Imagen</label>
        <input type="file" value={imagen} onChange={(e)=>{setImagen(e.target.value)}} id="@img" />
        
        <button className='mt-3 btn btn-primary' onClick={(e)=>{handleSubmit(e)}}>Subir Pelicula</button>
      </form>
    </div>
  )
}

export default App
