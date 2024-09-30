import Nav from "./Nav"
//import logo from "../img/logo.svg";

function Header() {
    return (
        <header>
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Little Lemon"/>
          <Nav/>
      </header>
    );
  }

  export default Header;