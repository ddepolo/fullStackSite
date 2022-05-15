import React, {useState} from 'react';
import axios from 'axios';

//import {EnviaMails} from '../components/funciones';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        texto: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }


    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        //console.log(formData)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.mensaje);
        if(response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        
        <div className="container-fluid">
        <div className="row titulos">
            <div className="col">
                <h2>Contacto</h2>
                <p>Envíe un contacto a nuestros especialistas.</p>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control"  id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email"  aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea className="form-control" id="texto" name="texto" onChange={handleChange} >{formData.texto}</textarea>
            </div>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            
            <button type="submit" className="btn btn-warning" >Enviar</button>
        </form>

        
        
        </div>
  



        
    );
}

export default Contacto;