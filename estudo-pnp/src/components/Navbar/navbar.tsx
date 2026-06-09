import { Link } from "react-router-dom"

function NavBar(){
    const Links: any[][] = [["/", "Home"],["/about", "Sobre nós"]]
    return <>
        <div className="br-header" style={{ flexDirection: 'column', alignItems: 'center' }}>
            <div className="br-list" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                {Links.map(([link, nome]) => ( 
                <Link className="br-item" style={{ margin: '4px', justifyContent: 'center', textAlign: 'center', width: '30%', borderStyle: 'solid', borderRadius: '12px' }} to={link}>{nome}</Link>))}
            </div> 
                <div className="header-login">
                <div className="header-sign-in">
                    <Link to="/signup" className="br-sign-in small" type="button" data-trigger="login"><span className="d-sm-inline">Cadastrar</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default NavBar