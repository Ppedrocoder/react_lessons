
import NavBar from "../../components/Navbar/navbar"
import { useForm } from "react-hook-form";

function Form() {
    const {handleSubmit, register, reset} = useForm()
    function dataHandler(data){
        if(!data.email){ console.log("tá faltando email")}
        if(!data.nome){ console.log("tá faltando nome")}
        if(!data.telefone){ console.log("tá faltando telefone")}
        if(!data.idade){ console.log("tá faltando idade")}
        console.log(data)
    }

    return <>
        <NavBar/>
        <div className="container mt-4">
            <div className="row d-flex justify-content-center ">
                <div className="col-4">
                    <form onSubmit={handleSubmit(dataHandler)}>
                        <div>
                            <div className="br-input">
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" type="text" placeholder="Insira seu nome" {...register("nome")} />
                            </div>
                        </div>
                        <div>
                            <div className="br-input">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" placeholder="Insira o email" {...register("email")} />
                            </div>
                        </div>
                        
                        <div>
                            <div className="br-input">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" placeholder="Insira o telefone" {...register("telefone")} />
                            </div>
                        </div>

                        <div>
                            <div className="br-input">
                                <label htmlFor="idade">Idade</label>
                                <input id="idade" type="number" placeholder="Insira a idade" {...register("idade")} />
                            </div>
                        </div>
                        <button className="br-button secondary" type="button" onClick={() => reset()}>Limpar</button>
                        <button className="br-button primary" type="submit">Cadastrar</button>
                    </form>
                </div>
                
            </div>
            
        </div>
    </>
}

export default Form