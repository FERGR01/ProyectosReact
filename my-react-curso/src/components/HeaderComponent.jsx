import "./HeaderComponent.css";
function HeaderComponent(){
    return(
        <header className="header">
            <h1 className="title">Bienvenidos</h1>
            <nav>
                <ul className="header-list">
                    <li>
                        <a href="" className="link">Casa</a>
                    </li>
                    <li>
                        <a href="" className="link">Blog</a>
                    </li>
                    <li>
                        <a href="" className="link">Nuevo</a>
                    </li>
                    <li>
                        <a href="" className="link">Contáctanos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent