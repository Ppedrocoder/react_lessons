import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/navbar";

function About(){
    return <>
    <NavBar/>
    <div className="container">
        <h1 className="text-3xl font-bold mt-4">Sobre nós</h1>  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex justify-center">
            <Link className="br-button primary mt-4" to="/">Home</Link>
        </div>
    </div>
    </>
}

export default About;