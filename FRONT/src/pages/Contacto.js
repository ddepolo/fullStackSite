import React from 'react';

const Contacto = (props) => {
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

        <form>
            <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Nombre</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
            <label for="Mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="Mensaje"></textarea>
            </div>
            
            <button type="submit" className="btn btn-warning">Enviar</button>
        </form>
        
        </div>
  



        
    );
}

export default Contacto;