import { Logo } from "../Logo";
import HeaderIcones from "./Icones";

import HeaderOpcoes from "./Opcoes";

function Header() {
  return (
    <header
      id="header"
      className="bg-gray-200 h-20 flex items-center justify-around"
    >
      <Logo />
      <HeaderOpcoes />
      <HeaderIcones />
    </header>
  );
}

export default Header;
