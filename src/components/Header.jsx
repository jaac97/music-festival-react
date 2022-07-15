const Header = () => {
    return ( 
        <>   
            <header className="header">
                <div className="header__container">
                    <h2 className="header__heading">Rock & EDM Festival</h2>
                    <nav className="nav">
                        <a className="nav__anchor" href="#lineup">Line Up</a>
                        <a className="nav__anchor" href="#galery">Galery</a>
                        <a className="nav__anchor" href="#tickets">Tickets</a>
                    </nav>
                </div>
            </header>
        </>
     );
}
 
export default Header;