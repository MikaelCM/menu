import "./Header.css"

import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="logo">
        <img src={Logo} alt="Logo La Dolce Dinha" />
    </header>
  )
}

export default Header