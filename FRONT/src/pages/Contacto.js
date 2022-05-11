import React, {useState} from 'react';
import axios from 'axios';
//import {EnviaMails} from '../components/funciones';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            oldData,
            [name]: value
        }));
    }


    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris.</p>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleInputPassword1" value={formData.nombre} onChange={handleChange} />
            </div>
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
            <label for="Mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="Mensaje" onChange={handleChange}>{formData.mensaje}</textarea>
            </div>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            
            <button type="submit" className="btn btn-warning" >Enviar</button>
        </form>

        
        
        </div>
  



        
    );
}

export default Contacto;