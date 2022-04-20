import { Container } from "react-bootstrap";
import "../App.css";

export default function LogoMiguel() {
    return (
        <Container>
           <div className="comFather">
                <div className="">
                    <img className="mgs logoAnimeN1" src={require("../img/N.png")} alt="..." />
                    <img className="mgs logoAnimeN2" src={require("../img/N.png")} alt="..." />
                    <img className="mgs logoAnimeW" src={require("../img/W.png")} alt="..." />
                    
                </div>
            </div>
            
        </Container>
    );
  }