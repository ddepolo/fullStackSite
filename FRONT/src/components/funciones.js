import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/home.css';
import Cookies from 'universal-cookie';


const MuestraBurgers = ({foto, titulo, texto}) => {
    //const imagen = './fotos/burger'+foto+'.jpg';
    var prefijo = "https://res.cloudinary.com/holamundosrl/image/upload/v1652639930/";

    //const [loading, setLoading] = useState(false);
    const [burgers, setBurgers] = useState([]);

    useEffect(()=> {
        const traeBurgers = async () => {
            //setLoading(true);
            const response = await axios.get('http://localhost:3000/api/burgers');
            setBurgers(response.data);
            //setLoading(false);
        };
        traeBurgers();
    }, []);
    
    return (
        
            burgers.map(item => <div className="col">
                <div className="card" id={item.id}>
                    <img src={prefijo+item.img_id} className="card-img-top"/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">{item.nombre}</h5>
                        <p className="card-text">{item.detalle}</p>
                    </div>
                </div>
            </div>)
            
            
            


    );
}

const MuestraBurgers2 = ({foto, titulo, texto}) => {
    var prefijo = "https://res.cloudinary.com/holamundosrl/image/upload/v1652639930/";

    const [burgers, setBurgers] = useState([]);

    useEffect(()=> {
        const traeBurgers = async () => {
            //setLoading(true);
            const response = await axios.get('http://localhost:3000/api/burgers');
            setBurgers(response.data);
            //setLoading(false);
        };
        traeBurgers();
    }, []);

    return (
        
        
            burgers.map(item => <div className="col">
                <div className="card" id={item.id}>
                    <img src={prefijo+item.img_id} className="card-img-top"/>
                    <div className="card-body cardCust">
                        <h5 className="card-title text-center h2">{item.nombre}</h5>
                        <p className="card-text">{item.detalle}</p>
                    </div>
                    
                    <a href="#" class="btn btn-warning right" onClick={() => PedirItem(item)}>Pedir</a>
                </div>
            </div>)
      

    );
}

const PedirItem = (props) => {
    //agregamos items a un "array string" precario para guardarlo en una cookie
   const cookies = new Cookies();

   if(!cookies.get('PedidoLista')){
        var dat = [props];
        cookies.set('PedidoLista', dat, { path: '/' });
   }else{
        var temp = cookies.get('PedidoLista');
        temp.push(props);
        console.log(temp)
        cookies.set('PedidoLista', temp, { path: '/' });
   }
   
   //console.log(cookies.get('PedidoLista'))
   
}


const MuestraPedidos = (props) => {
    var cookies = new Cookies();
    var data = cookies.get('PedidoLista');
    //console.log(data[0])
    
    try{
        return (
            data.map((item, index, wholeArray) => 
                <tr className="d-flex">
                    <th className="col-1">{index}</th>
                    <td className="col-3">{item.nombre}</td>
                    <td className="col-1">{item.precio}</td>
                    <td className="col-1"><a href="#" title="Borrar item" className="fa fa-minus-circle liks"></a></td>
                </tr>
            )
            
        );
    }catch(err){
        //console.log(err);
    }
}





export {
    MuestraBurgers,
    MuestraBurgers2,
    PedirItem,
    MuestraPedidos
};