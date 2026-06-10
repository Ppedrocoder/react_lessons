import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/navbar";
import CharactersService from "../../services/CharactersService";
import { useEffect, useState } from "react";

interface IPersonagem {
    _id: number,
    imageUrl: string,
    name: string
}

function Home(){
    const [listPersonagens, setListPersonagens] = useState<IPersonagem[]>([])


    const handleData = () => {
        CharactersService.listarPersonagens()
        .then((res) => {
            const{ data} = res.data;
            setListPersonagens(data);
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {handleData()}, [])
    return <>
    <NavBar/>
    <div className="container">  
        <h1 className="text-3xl font-bold mt-4">Home</h1>  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex flex-row flex-wrap gap-4 mt-4">
        {
            listPersonagens.map((personagem) => {
                return <div  key={personagem._id} className="br-modal w-70 h-60 mx-auto flex mt-12">
                            <div className="flex flex-col w-50px mx-auto text-center">
                                {personagem.imageUrl !== undefined ? <img src={personagem.imageUrl} alt={personagem.name} style={{width:"120px", height:"140px", margin:"auto", marginTop:"10px"}}/> : <img src="https://www.planocritico.com/wp-content/uploads/2021/03/Disney-Animacoes-Ranking.jpg" alt="Foto" style={{width:"120px", height:"140px", margin:"auto", marginTop:"10px"}}/>}
                                {personagem.name && <h2 style={{fontSize:"1.55rem", fontWeight:"regular", marginTop:"1rem"}}>{personagem.name}</h2>} 
                            </div>
                            <div className="flex flex-col w-50px mx-auto text-center">
                            </div>
                        </div>
                             
            })
        }
        </div>
        <div className="flex justify-center">
            <Link className="br-button primary mt-4" to="/about">Sobre nós</Link>
        </div>
    </div>
    </>
}

export default Home;