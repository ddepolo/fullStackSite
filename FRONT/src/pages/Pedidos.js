import React from 'react';

const Pedidos = (props) => {
    return (
        
        <div className="container-fluid">
        <div className="row titulos">
            <div className="col">
                <h2>Pedidos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris.</p>
            </div>
        </div>

            <table className="table">
            <thead>
                <tr className="d-flex">
                <th className="col-1">#</th>
                <th className="col-3">Detalle</th>
                <th className="col-1">Precio</th>
                <th className="col-1">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr className="d-flex">
                <th className="col-1">1</th>
                <td className="col-3">Burger 1</td>
                <td className="col-1">800.00</td>
                <td className="col-1">2</td>
                <td className="col-1"><a href="#" title="Borrar item" className="fa fa-minus-circle liks"></a></td>
                </tr>

                <tr className="d-flex">
                <th className="col-1">2</th>
                <td className="col-3">Burger 2</td>
                <td className="col-1">350.00</td>
                <td className="col-1">1</td>
                <td className="col-1"><a href="#" title="Borrar item" className="fa fa-minus-circle liks"></a></td>
                </tr>

                <tr className="d-flex">
                <th className="col-1">3</th>
                <td className="col-3">Burger 3</td>
                <td className="col-1">600.00</td>
                <td className="col-1">1</td>
                <td className="col-1"><a href="#" title="Borrar item" className="fa fa-minus-circle liks"></a></td>
                </tr>
            
            </tbody>
            </table>
            
            <button type="submit" className="btn btn-warning">Confirmar pedido</button>
        </div>
    );
}

export default Pedidos;