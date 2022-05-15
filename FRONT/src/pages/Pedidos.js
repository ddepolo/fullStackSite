import React, {useState} from 'react';
import axios from 'axios';
import {MuestraPedidos} from '../components/funciones';
import Cookies from 'universal-cookie';

// a esta ventana le faltarían botones de eliminar items del pedido o enviar datos adicionales al mismo, pero no hubo tiempo -_-

const Pedidos = (props) => {

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');

    var cookies = new Cookies();
    var cookieData = cookies.get('PedidoLista');
    //cookieData = JSON.stringify(cookieData);

    //console.log(cookieData)

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)

        const response = await axios.post('http://localhost:3000/api/enviopedido', cookieData);
        setSending(false);
        setMsg(response.data.mensaje);
        

    }

    return (
        <div className="container-fluid">
        <div className="row titulos">
            <div className="col">
                <h2>Pedidos</h2>
                <p>Podrá ver los pedidos pendientes a realizar desde esta pantalla.</p>
            </div>
        </div>

            <table className="table">
            <thead>
                <tr className="d-flex">
                <th className="col-1">#</th>
                <th className="col-3">Detalle</th>
                <th className="col-1">Precio</th>
                </tr>
            </thead>
            <tbody>

               <MuestraPedidos/>

            </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-warning">Confirmar pedido</button>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </form>
        </div>
    );
}

export default Pedidos;