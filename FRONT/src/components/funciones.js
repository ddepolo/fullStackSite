import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/home.css';


const MuestraBurgers = ({foto, titulo, texto}) => {
    //const imagen = './fotos/burger'+foto+'.jpg';
    var prefijo = "./fotos/";

    //const [loading, setLoading] = useState(false);
    const [burgers, setBurgers] = useState([]);

    useEffect(()=> {
        const traeBurgers = async () => {
            //setLoading(true);
            const response = await axios.get('http://localhost:3000/api/burgers');
            setBurgers(response.data);
            console.log('testttttt'+response)
            //setLoading(false);
        };
        traeBurgers();
    }, []);
    
    return (
            burgers.map(item => <div className="col">
                <div className="card">
                    <img src={prefijo+item.imagen} className="card-img-top"/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">{item.nombre}</h5>
                        <p className="card-text">{item.detalle}</p>
                    </div>
                </div>
            </div>)


    );
}

const MuestraBurgers2 = ({foto, titulo, texto}) => {
    var prefijo = "./fotos/";

    const [burgers, setBurgers] = useState([]);

    useEffect(()=> {
        const traeBurgers = async () => {
            //setLoading(true);
            const response = await axios.get('http://localhost:3000/api/burgers');
            setBurgers(response.data);
            console.log('testttttt'+response)
            //setLoading(false);
        };
        traeBurgers();
    }, []);
    
    return (
        burgers.map(item => <div className="col">
                <div className="card">
                    <img src={prefijo+item.imagen} className="card-img-top"/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">{item.nombre}</h5>
                        <p className="card-text">{item.detalle}</p>
                    </div>
                    <a href="#" class="btn btn-warning right">Pedir</a>
                </div>
            </div>)


    );
}

export {
    MuestraBurgers,
    MuestraBurgers2
};