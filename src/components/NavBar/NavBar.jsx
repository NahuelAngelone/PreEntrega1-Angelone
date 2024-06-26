import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
    return (
        <nav className="navbar bg-dark border-bottom border-body navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">EureK4rds</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                <a className="nav-link" href="#">Cartas</a>
                <a className="nav-link" href="#">Box</a>
                <a className="nav-link" href="#">Tin</a>
                <CartWidget/>
                
</div>
            </div>
        </div>
        </nav>
    )
}
export default NavBar;