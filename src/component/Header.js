import './Header.css';
export const Header=()=>{
    return(<>
    <nav className="navbar">
        <h2 className="title">Leadzen</h2>
        <div className="right">
        <h3 id="about">About</h3>
        <h3 id="signin">Sign-in</h3>
        </div>
    </nav>
    </>);

}