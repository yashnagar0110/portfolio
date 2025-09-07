import "../styles/global.css";
const Header = () => {

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav " style={{margin : "0 auto"}}>
                    <li className="nav-item">
                    <a className="nav-link" href="#aboutpage">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#skillpage" >Skills</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#projectpage">Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#edupage">Education</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contactpage">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Header;
