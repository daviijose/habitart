import React from "react";
import Chicoscience from "../../assets/chicoscience.png";
import Artesanato from "../../assets/artesanato.png";
import Frevo from "../../assets/frevo.png";
import Frutas from "../../assets/frutas.png";
import "./style.css";

export default function Midle() {
    return (
        <div >
            <div class="midle">
                <div class="img-master">
                    <div className="img">
                        <img src={Frevo} alt="frevo" width={300} height={300} />
                    </div>

                    <div className="img">
                        <img src={Chicoscience} alt="chicoscience" width={300} height={300} />
                    </div>

                    <div className="img">
                        <img src={Frutas} alt="frutas" width={300} height={300} />
                    </div>

                    <div className="img">
                        <img src={Artesanato} alt="artesanato" width={300} height={300} />
                    </div>
                
                </div>
                
                
            </div>
        </div>


    );
}