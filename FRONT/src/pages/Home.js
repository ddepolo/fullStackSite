import React from 'react';
import {MuestraBurgers} from '../components/funciones';
import '../styles/home.css';




const Home = (props) => {

   

    return (
        <div>
            <div className="container-fluid siteSlider">
                <div className="row">
                    <div className="col">
                        <div className="sliderText">Es la tuya <br/>pedila</div>
                    </div>
                    <div className="col">
                    <img src="./fotos/burger1.jpg" className="img-fluid" />
                    </div>
                </div>  
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
                
                    <MuestraBurgers/>
                    
                
                </div>
        </div>
    );
}

export default Home;