
import NavBar from "../../components/Navbar/navbar"
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver} from "@hookform/resolvers/yup"

const schema = yup.object().shape({
    nome: yup.string().required().min(3), 
    email: yup.string().email().required().max(30),
    telefone: yup.string().nullable().max(11),
    idade: yup.number().required().positive()
});

function Form() {
    const {handleSubmit, register, reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    })
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
                            <div className={`br-input ${errors.nome !== undefined ? "danger" : ""}`}>
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" type="text" placeholder="Insira seu nome" {...register("nome")} />
                                {errors.nome !== undefined && (<span className="feedback danger" role="alert" id="danger"><i className="fas fa-times-circle" aria-hidden="true"></i>Nome não foi preenchido</span>)}
                            </div>
                        </div>
                        <div>
                            <div className={`br-input ${errors.email !== undefined ? "danger" : ""}`}>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" placeholder="Insira o email" {...register("email")} />
                                {errors.email !== undefined && (<span className="feedback danger" role="alert" id="danger"><i className="fas fa-times-circle" aria-hidden="true"></i>Email está errado</span>)}
                            </div>
                        </div>
                        
                        <div>
                            <div className={`br-input ${errors.telefone !== undefined ? "danger" : ""}`}>
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" placeholder="Insira o telefone" {...register("telefone")} />
                                {errors.telefone !== undefined && (<span className="feedback danger" role="alert" id="danger"><i className="fas fa-times-circle" aria-hidden="true"></i>Telefone não foi preenchido</span>)}
                            </div>
                        </div>

                        <div>
                            <div className={`br-input ${errors.idade !== undefined ? "danger" : ""}`}>
                                <label htmlFor="idade">Idade</label>
                                <input id="idade" type="number" placeholder="Insira a idade" {...register("idade")} />
                                {errors.idade !== undefined && (<span className="feedback danger" role="alert" id="danger"><i className="fas fa-times-circle" aria-hidden="true"></i>Idade não foi preenchida</span>)}
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